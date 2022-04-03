<template>
  <Head>
    <meta charset="utf-8" />
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
          name="viewport" />
  </Head>
  <n-space align="center" class="h-full" justify="center" vertical="true" wrap="false">
    <n-spin :show="show">
      <canvas v-show="!show" id="canvas" ref="refCanvas" class="h-full w-full pr-0 border-0"
              oncontextmenu="return false;" />
    </n-spin>
    <p v-show="show" class="mt-4">{{ refText }}</p>
  </n-space>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import { onMounted, ref } from 'vue'
import ProjectLayout from '@/Layouts/ProjectLayout'

export default {
  name: 'Interpret',
  components: {
    Head,
  },
  layout: ProjectLayout,
  props: {},
  setup() {
    const show = ref(false)
    const refText = ref('')
    const refCanvas = ref(false)

    onMounted(() => {
      const love = require('../../../../../storage/app/public/download/E4HNfXMMxaEp3EOKTwhoRVqtJ19rzqas/game_old/love.js')

      window.addEventListener('keydown', function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault()
        }
      }, false)

      const getCanvas = () => {
        const canvas = refCanvas.value
        canvas.addEventListener('webglcontextlost', function (e) {
          alert('WebGL context lost. You will need to reload the page.')
          e.preventDefault()
        }, false)
        return canvas
      }

      const Module = {
        arguments: ['./game.love'],
        INITIAL_MEMORY: 16777216,
        printErr: console.error.bind(console),
        canvas: getCanvas(),
        setStatus: text => {
          if (text) {
            show.value = true
            refText.value = text
          } else if (Module.remainingDependencies === 0) {
            show.value = false
          }
        },
        totalDependencies: 0,
        remainingDependencies: 0,
        monitorRunDependencies: function (left) {
          this.remainingDependencies = left
          this.totalDependencies = Math.max(this.totalDependencies, left)
          Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.')
        },
      }

      Module.setStatus('Downloading...')
      window.onerror = event => {
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        Module.setStatus('Exception thrown, see JavaScript console')
        Module.setStatus = text => {
          if (text) Module.printErr('[post-exception status] ' + text)
        }
      }

      if (!Module.expectedDataFileDownloads) {
        Module.expectedDataFileDownloads = 0
        Module.finishedDataFileDownloads = 0
      }
      Module.expectedDataFileDownloads++

      const loadGame = () => {
        const loadPackage = (metadata) => {
          const PACKAGE_PATH = '/storage/download/E4HNfXMMxaEp3EOKTwhoRVqtJ19rzqas/game_old/'
          const PACKAGE_NAME = 'game.data'
          const REMOTE_PACKAGE_BASE = 'game.data'
          const REMOTE_PACKAGE_NAME = typeof Module.locateFile === 'function' ? Module.locateFile(REMOTE_PACKAGE_BASE) : ((Module.filePackagePrefixURL || '') + REMOTE_PACKAGE_BASE)
          const REMOTE_PACKAGE_SIZE = metadata.remote_package_size
          const PACKAGE_UUID = metadata.package_uuid

          function fetchRemotePackage(packageName, packageSize, callback) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', PACKAGE_PATH + packageName, true)
            xhr.responseType = 'arraybuffer'
            xhr.onprogress = event => {
              const url = packageName
              let size = packageSize
              if (event.total) size = event.total
              if (event.loaded) {
                if (!xhr.addedTotal) {
                  xhr.addedTotal = true
                  if (!Module.dataFileDownloads) Module.dataFileDownloads = {}
                  Module.dataFileDownloads[url] = { loaded: event.loaded, total: size }
                } else {
                  Module.dataFileDownloads[url].loaded = event.loaded
                }
                let total = 0
                let loaded = 0
                let num = 0
                for (const download in Module.dataFileDownloads) {
                  const data = Module.dataFileDownloads[download]
                  total += data.total
                  loaded += data.loaded
                  num++
                }
                total = Math.ceil(total * Module.expectedDataFileDownloads / num)
                if (Module.setStatus) Module.setStatus('Downloading data... (' + loaded + '/' + total + ')')
              } else if (!Module.dataFileDownloads) {
                if (Module.setStatus) Module.setStatus('Downloading data...')
              }
            }
            xhr.onerror = () => {
              throw new Error('NetworkError for: ' + packageName)
            }
            xhr.onload = () => {
              if (xhr.status === 200 || xhr.status === 304 || xhr.status === 206 || (xhr.status === 0 && xhr.response)) { // file URLs can return 0
                const packageData = xhr.response
                callback(packageData)
              } else {
                throw new Error(xhr.statusText + ' : ' + xhr.responseURL)
              }
            }
            xhr.send(null)
          }

          function handleError(error) {
            console.error('package error:', error)
          }

          function runWithFS() {
            function assert(check, msg) {
              if (!check) throw msg + new Error().stack
            }

            const DataRequest = function (start, end, crunched, audio) {
              this.start = start
              this.end = end
              this.crunched = crunched
              this.audio = audio
            }

            DataRequest.prototype = {
              requests: {},
              open: function (mode, name) {
                this.name = name
                this.requests[name] = this
                Module.addRunDependency('fp ' + this.name)
              },
              send: function () {
              },
              onload: function () {
                const byteArray = this.byteArray.subarray(this.start, this.end)
                this.finish(byteArray)
              },
              finish: function (byteArray) {
                const that = this
                Module.FS_createDataFile(this.name, null, byteArray, true, true, true) // canOwn this data in the filesystem, it is a slide into the heap that will never change
                Module.removeRunDependency('fp ' + that.name)
                this.requests[this.name] = null
              },
            }

            const files = metadata.files
            for (let i = 0; i < files.length; ++i) {
              new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename)
            }

            const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
            const IDB_RO = 'readonly'
            const IDB_RW = 'readwrite'
            const DB_NAME = 'EM_PRELOAD_CACHE'
            const DB_VERSION = 1
            const METADATA_STORE_NAME = 'METADATA'
            const PACKAGE_STORE_NAME = 'PACKAGES'

            function openDatabase(callback, errback) {
              let openRequest
              try {
                openRequest = indexedDB.open(DB_NAME, DB_VERSION)
              } catch (e) {
                return errback(e)
              }
              openRequest.onupgradeneeded = event => {
                const db = event.target.result
                if (db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
                  db.deleteObjectStore(PACKAGE_STORE_NAME)
                }
                db.createObjectStore(PACKAGE_STORE_NAME)
                if (db.objectStoreNames.contains(METADATA_STORE_NAME)) {
                  db.deleteObjectStore(METADATA_STORE_NAME)
                }
                db.createObjectStore(METADATA_STORE_NAME)
              }
              openRequest.onsuccess = event => {
                const db = event.target.result
                callback(db)
              }
              openRequest.onerror = error => {
                errback(error)
              }
            }

            function checkCachedPackage(db, packageName, callback, errback) {
              const transaction = db.transaction([METADATA_STORE_NAME], IDB_RO)
              const metadata = transaction.objectStore(METADATA_STORE_NAME)

              const getRequest = metadata.get('metadata/' + packageName)
              getRequest.onsuccess = function (event) {
                const result = event.target.result
                if (!result) {
                  return callback(false)
                } else {
                  return callback(PACKAGE_UUID === result.uuid)
                }
              }
              getRequest.onerror = function (error) {
                errback(error)
              }
            }

            function fetchCachedPackage(db, packageName, callback, errback) {
              const transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO)
              const packages = transaction.objectStore(PACKAGE_STORE_NAME)

              const getRequest = packages.get('package/' + packageName)
              getRequest.onsuccess = event => {
                const result = event.target.result
                callback(result)
              }
              getRequest.onerror = error => {
                errback(error)
              }
            }

            function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
              const transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW)
              const packages = transactionPackages.objectStore(PACKAGE_STORE_NAME)

              const putPackageRequest = packages.put(packageData, 'package/' + packageName)
              putPackageRequest.onsuccess = () => {
                const transactionMetadata = db.transaction([METADATA_STORE_NAME], IDB_RW)
                const metadata = transactionMetadata.objectStore(METADATA_STORE_NAME)
                const putMetadataRequest = metadata.put(packageMeta, 'metadata/' + packageName)
                putMetadataRequest.onsuccess = () => {
                  callback(packageData)
                }
                putMetadataRequest.onerror = error => {
                  errback(error)
                }
              }
              putPackageRequest.onerror = error => {
                errback(error)
              }
            }

            function processPackageData(arrayBuffer) {
              Module.finishedDataFileDownloads++
              assert(arrayBuffer, 'Loading data file failed.')
              assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData')
              const byteArray = new Uint8Array(arrayBuffer)

              if (Module.SPLIT_MEMORY) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting')
              const ptr = Module.getMemory(byteArray.length)
              Module.HEAPU8.set(byteArray, ptr)
              DataRequest.prototype.byteArray = Module.HEAPU8.subarray(ptr, ptr + byteArray.length)

              const files = metadata.files
              for (let i = 0; i < files.length; ++i) {
                DataRequest.prototype.requests[files[i].filename].onload()
              }
              Module.removeRunDependency('datafile_game.data')
            }

            Module.addRunDependency('datafile_game.data')

            if (!Module.preloadResults) Module.preloadResults = {}

            function preloadFallback(error) {
              console.error(error)
              console.error('falling back to default preload behavior')
              fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError)
            }

            openDatabase(db => {
              checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, useCached => {
                Module.preloadResults[PACKAGE_NAME] = { fromCache: useCached }
                if (useCached) {
                  console.info('loading ' + PACKAGE_NAME + ' from cache')
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback)
                } else {
                  console.info('loading ' + PACKAGE_NAME + ' from remote')
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, packageData => {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, { uuid: PACKAGE_UUID }, processPackageData, error => {
                      console.error(error)
                      processPackageData(packageData)
                    })
                  }, preloadFallback)
                }
              }, preloadFallback)
            }, preloadFallback)

            if (Module.setStatus) Module.setStatus('Downloading...')
          }

          if (Module.calledRun) {
            runWithFS()
          } else {
            if (!Module.preRun) Module.preRun = []
            Module.preRun.push(runWithFS) // FS is not initialized yet, wait for it
          }
        }

        loadPackage({
          package_uuid: '680f1883-c4c7-47ac-85bb-5b61f9ae7899',
          remote_package_size: 1587,
          files: [{ filename: '/game.love', crunched: 0, start: 0, end: 1587, audio: false }],
        })
      }

      loadGame()
      love(Module)
    })

    return {
      show,
      refCanvas,
      refText,
    }
  },
}
</script>

<style scoped>

</style>

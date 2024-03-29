<template>
  <Head>
    <meta charset="utf-8" />
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
          name="viewport" />
  </Head>
  <div class="relative">
    <div class="absolute right-0 pr-2 mt-2 z-20">
      <div class=" flex flex-row flex-nowrap">
        <n-button :type="'primary'" class="flex-shrink" size="small" style="margin-right: 0.5rem"
                  @click="saveAndRefreshGame">
          <template #icon>
            <n-icon>
              <refresh-icon />
            </n-icon>
          </template>
        </n-button>
        <n-button v-show="show" :type="'error'" class="flex-shrink" size="small"
                  style="margin-right: 0.5rem"
                  @click="stopGame">
          <template #icon>
            <n-icon>
              <stop-icon />
            </n-icon>
          </template>
        </n-button>
        <n-button v-show="show" :type="gameMode ? 'primary' : 'error'" class="flex-shrink" size="small"
                  @click="changeGameMode">
          <template #icon>
            <n-icon>
              <play-icon v-show="gameMode" />
              <pause-icon v-show="!gameMode" />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </div>
  <n-space :vertical="true" :wrap="false" align="center" class="h-full" justify="center">
    <n-spin :show="showSpinner">
      <canvas v-show="show" id="canvas" ref="refCanvas" class="h-full w-full pr-0 border-0"
              oncontextmenu="return false;" />
    </n-spin>
    <p v-show="!show" class="mt-4">{{ refText }}</p>
  </n-space>
</template>

<script>
import { Head, usePage } from '@inertiajs/inertia-vue3'
import { onMounted, ref, computed, watch, onBeforeUnmount } from 'vue'
import ProjectLayout from '@/Layouts/ProjectLayout'
import useMessaging from '@/messages'
import loveJS from '@/love'
import {
  RefreshOutline as RefreshIcon,
  PlayOutline as PlayIcon,
  PauseOutline as PauseIcon,
  StopCircleOutline as StopIcon,
} from '@vicons/ionicons5'
import { Inertia } from '@inertiajs/inertia'

export default {
  name: 'Interpret',
  components: {
    Head,
    RefreshIcon,
    PlayIcon,
    PauseIcon,
    StopIcon,
  },
  layout: ProjectLayout,
  props: {
    project: Object,
    gamePackage: Object,
    turnOffGameMode: Boolean,
    refreshGame: Boolean,
  },
  emits: ['saveAndRefresh', 'heapSize'],
  setup(props, { emit }) {
    const { message } = useMessaging()
    const showSpinner = ref(false)
    const show = ref(false)
    const refText = ref('')
    const refCanvas = ref(null)
    const gameMode = ref(true)
    const user = computed(() => usePage().props.value.user)
    const gamePackage = computed(() => props.gamePackage)
    const PACKAGE_PATH = '/storage/download/' + props.project.directory_name + '/games/' + user.value.id + '/'
    const wasmBinaryFile = window.top.origin + '/storage/download/' + props.project.directory_name + '/games/' + user.value.id + '/love.wasm'
    let events, removeAllEventListeners, registerOrRemoveHandler, heapSize, heapSizeEstimated

    try {
      heapSize = ref(performance.memory.usedJSHeapSize)
    } catch (e) {
      heapSizeEstimated = ref(73400320)
    }

    /**
     * Watch if game mode should be turned off
     */
    watch(() => props.turnOffGameMode, () => {
      show.value = false
      refText.value = 'Game is not loaded. Press refresh button.'
      console.log('Turning off game mode')
      gameMode.value = true
      removeAllEventListeners()
    })

    /**
     * Update current heap usege every 5 secons
     * @type {NodeJS.Timer}
     */
    const updateUsage = setInterval(() => {
      try {
        heapSize.value = performance.memory.usedJSHeapSize
        emitHeapSize()
      } catch (e) {
        clearInterval(updateUsage)
      }
    }, 5000)

    const formatBytes = (bytes) => {
      if (bytes === 0) return 0
      const k = 1024
      return parseFloat((bytes / Math.pow(k, 2)).toFixed(2))
    }

    /**
     * Emit current heap size -> displayed in top panel
     */
    const emitHeapSize = () => {
      try {
        emit('heapSize', formatBytes(heapSize.value))
      } catch (e) {
        heapSizeEstimated.value += 16777216
        emit('heapSize', formatBytes(heapSizeEstimated.value))
      }
    }
    emitHeapSize()

    /**
     * Watch if game should be refreshed
     */
    watch(() => props.refreshGame, () => {
      if (props.refreshGame === true) {
        Inertia.reload({
          only: ['gamePackage'],
          onFinish: () => {
            gameMode.value = false
            if (gamePackage.value !== undefined) runGame()
          },
        })
      }
    })

    /**
     * On mounted show/hode spinner and text
     */
    onMounted(() => {
      if (gamePackage.value === null || typeof gamePackage.value === 'undefined') {
        refText.value = 'Game is not loaded. Press refresh button.'
        show.value = false
        showSpinner.value = false
      } else if (user.value.id === null) {
        show.value = false
        showSpinner.value = false
        refText.value = 'Interpret only works if you sign in'
      }
    })

    /**
     * Clean up before component is removed
     */
    onBeforeUnmount(() => {
      show.value = false
      refText.value = 'Game is not loaded. Press refresh button.'
      console.log('Turning off game mode')
      gameMode.value = true
      try {
        removeAllEventListeners()
        cleanup()
      } catch (e) {
      }
    })

    /**
     * Switch game mode
     * removes or adds event listeners for the game
     */
    const changeGameMode = () => {
      if (gameMode.value) {
        message.info('Game mode is on. Your keyboard input will be used for the game.')
        console.log('Turning on game mode')
        gameMode.value = false
        events.forEach(event => registerOrRemoveHandler(event))
      } else {
        message.info('Game mode is off.')
        console.log('Turning off game mode')
        gameMode.value = true
        removeAllEventListeners()
      }
    }

    /**
     * Run game generated with love.js -> needs gamePackage
     * @Title: love.js
     * @Author: Davidobot
     * @Date: 15.3.2022
     * @Availability: https://github.com/Davidobot/love.js
     */
    const runGame = () => {
      removeAllEventListeners = loveJS.JSEvents.removeAllEventListeners
      registerOrRemoveHandler = loveJS.JSEvents.registerOrRemoveHandler
      events = loveJS.allEventHandlers

      window.onload = () => {
        window.focus()
      }
      window.onclick = () => {
        window.focus()
      }

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
            show.value = false
            refText.value = text
            showSpinner.value = true
          } else if (Module.remainingDependencies === 0) {
            show.value = true
            showSpinner.value = false
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
      window.onerror = () => {
        // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
        if (gamePackage.value !== null || typeof gamePackage.value !== 'undefined') {
          Module.setStatus('Exception thrown, see JavaScript console')
          Module.setStatus = text => {
            if (text) Module.printErr('[post-exception status] ' + text)
          }
        }
      }

      if (!Module.expectedDataFileDownloads) {
        Module.expectedDataFileDownloads = 0
        Module.finishedDataFileDownloads = 0
      }
      Module.expectedDataFileDownloads++

      const loadGame = () => {
        const loadPackage = (metadata) => {
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
                Module.FS_createDataFile(this.name, null, byteArray, true, true, true)
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
          package_uuid: gamePackage.value.package_uuid,
          remote_package_size: gamePackage.value.remote_package_size,
          files: [{
            filename: gamePackage.value.files[0].filename,
            crunched: gamePackage.value.files[0].crunched,
            start: gamePackage.value.files[0].start,
            end: gamePackage.value.files[0].end,
            audio: gamePackage.value.files[0].audio,
          },
          ],
        })
      }

      loadGame()
      loveJS.Love(Module, wasmBinaryFile)
      emitHeapSize()
    }

    /**
     * Stop running game and remove all event listeners
     */
    const stopGame = () => {
      show.value = false
      refText.value = 'Game is not loaded. Press refresh button.'
      message.info('Game mode is off.')
      console.log('Turning off game mode')
      gameMode.value = true
      removeAllEventListeners()
      cleanup()
    }

    /**
     * Save workspace then run game
     * Emits saveAndRefresh -> parent component will do the rest
     */
    const saveAndRefreshGame = () => {
      emit('saveAndRefresh')
    }

    /**
     * Try to clean up after game is stopped
     */
    const cleanup = () => {
      const memory = loveJS.getMemoryArray()
      delete memory[0]
      memory[0] = null

      clearInterval(updateUsage)
    }

    return {
      show,
      showSpinner,
      refCanvas,
      refText,
      gameMode,
      saveAndRefreshGame,
      changeGameMode,
      stopGame,
    }
  },
}
</script>

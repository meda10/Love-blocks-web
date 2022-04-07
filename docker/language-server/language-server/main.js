'use strict'
import * as rpc from 'vscode-ws-jsonrpc'
import * as server from 'vscode-ws-jsonrpc/lib/server'
import { InitializeRequest } from 'vscode-languageserver'
import { resolve } from 'path'
import { WebSocketServer } from 'ws'

const port = 8888
const isInitializeRequest = message => message.method === InitializeRequest.type.method

const launch = socket => {
  const reader = new rpc.WebSocketMessageReader(socket)
  const writer = new rpc.WebSocketMessageWriter(socket)
  const socketConnection = server.createConnection(reader, writer, () => socket.dispose())

  console.log(resolve(process.cwd(), 'lua-language-server/bin/lua-language-server'))

  const serverConnection = server.createServerProcess(
    'Lua',
    resolve(process.cwd(), 'lua-language-server/bin/lua-language-server'),
  )
  // ['--configpath="config.json"', '--locale=en-us'],

  server.forward(socketConnection, serverConnection, message => {
    if (rpc.isRequestMessage(message) && isInitializeRequest(message)) {
      message.params.processId = process.pid
    }
    return message
  })
}

new WebSocketServer({ port: port }).on('connection', webSocket => {
  const socket = {
    send: content => webSocket.send(content, error => {
      if (error) throw error
    }),
    onMessage: callback => webSocket.on('message', callback),
    onError: callback => webSocket.on('error', callback),
    onClose: callback => webSocket.on('close', callback),
    dispose: () => webSocket.close(),
  }
  if (webSocket.readyState === webSocket.OPEN) {
    launch(socket)
  } else {
    webSocket.on('open', () => launch(socket))
  }
})

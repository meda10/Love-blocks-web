'use strict'
import { listen } from '@codingame/monaco-jsonrpc'
import { CloseAction, createConnection, ErrorAction, MonacoLanguageClient } from 'monaco-languageclient'
import ReconnectingWebSocket from 'reconnecting-websocket'

const createLanguageClient = function (connection) {
  return new MonacoLanguageClient({
    name: 'Lua Language Client',
    clientOptions: {
      documentSelector: ['lua'],
      errorHandler: {
        error: () => ErrorAction.Continue,
        closed: () => CloseAction.DoNotRestart,
      },
    },
    connectionProvider: {
      get: (errorHandler, closeHandler) => {
        return Promise.resolve(
          createConnection(connection, errorHandler, closeHandler),
        )
      },
    },
  })
}

export const connectLanguageServer = url => {
  listen({
    webSocket: new ReconnectingWebSocket(url),
    onConnection: connection => {
      const languageClient = createLanguageClient(connection)
      const disposable = languageClient.start()
      connection.onClose(() => disposable.dispose())
      connection.onError(error => console.log(error))
    },
  })
}

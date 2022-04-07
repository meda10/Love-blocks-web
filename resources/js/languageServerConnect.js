'use strict'
import { listen } from '@codingame/monaco-jsonrpc'
import { CloseAction, createConnection, ErrorAction, MonacoLanguageClient } from 'monaco-languageclient'
import ReconnectingWebSocket from 'reconnecting-websocket'

const createLanguageClient = function (connection) {
  return new MonacoLanguageClient({
    name: 'Lua Language Client',
    clientOptions: {
      documentSelector: ['lua'],
      middleware: {
        workspace: {
          configuration: (params, token, configuration) => {
            return [{
              workspace: {
                library: [
                  '${3rd}/love2d/library',
                  // '${3rd}/api/love',
                  // '${3rd}/api',
                ],
                checkThirdParty: false,
                preloadFileSize: 1000,
                userThirdParty: [
                  '${3rd}/love2d/library',
                  // '${3rd}/api/love',
                  // '${3rd}/api',
                ],
              },
            }]
          },
        },
      },
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
  const ws = new ReconnectingWebSocket(url)
  listen({
    webSocket: ws,
    onConnection: connection => {
      const languageClient = createLanguageClient(connection)
      const disposable = languageClient.start()
      connection.onClose(() => disposable.dispose())
      connection.onError(error => console.log(error))
    },
  })
  return ws
}

import { WKWebViewProps } from "react-native-wkwebview-reborn"

type EventType = {
  name: string
  data: any
}

class RemoteClass {
  send (text: string): void
  sendJSON (json: any): void
  on (eventName: string, handler: (eventData: any) => void)
  on<TEvent extends EventType> (eventName: TEvent['name'], handler: (eventData: TEvent['data']) => void)
  emit (eventName: string, eventData: any)
  emit<TEvent extends EventType> (eventName: TEvent['name'], eventData: TEvent['data'])
}

declare module 'react-native-wkwebview-reborn' {
  import * as React from 'react'
  import { WebViewProps } from 'react-native'

  export interface WKWebViewProps extends WebViewProps {
    allowsBackForwardNavigationGestures: boolean
  }

  export default class WKWebView extends React.Component<WKWebViewProps> {
    /*
     * Go back one page in the webview's history.
     */
    goBack: () => void
    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void
    /**
     * Post a message to the WebView in the form of a string.
     */
    postMessage: (message: string) => void
    /**
     * Reloads the current page.
     */
    reload: () => void
    /**
     * Stop loading the current page.
     */
    stopLoading (): void
    /**
     * Returns the native webview node.
     */
    getWebViewHandle: () => any
    /**
     * Inject JavaScript to be executed immediately.
     */
    injectJavaScript: (script: string) => void

    evaluateJavaScript: (script: string) => void
  }
}

declare module 'react-native-webview-messaging' {
  import * as React from 'react'
  import WKWebView from 'react-native-wkwebview-reborn'

  export class WebView extends React.Component<RN.WebViewProps & WKWebView.WKWebViewProps> {
    originalWebview: WKWebView
  }

  export type Remote = RemoteClass

  /*
  this.remote.sendJSON({
        payload: 'JSON from RN'
      });

      this.remote.send('plain text from RN');

      this.remote.emit('custom-event-from-rn', { payload: 'Custom event from RN' });
   */
  export function connectToRemote (webView: WebView): Promise<Remote>
}

declare module 'react-native-webview-messaging/web' {
  export type Remote = RemoteClass

  export function connectToRemote (): Promise<RemoteClass>
}

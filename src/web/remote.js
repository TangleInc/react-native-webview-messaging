import EventEmitter from 'events';
import { LIB_PREFIX, Events } from '../shared/constants';

const isIPhone = navigator.userAgent.toLowerCase().indexOf('iphone') > -1

function stringify(type, payload, meta) {
  return LIB_PREFIX + JSON.stringify({
    type,
    payload,
    meta,
  })
}

function sendToRemote(data) {
  if (isIPhone) {
    if (window.postMessage.length === 2) {
      requestAnimationFrame(() => {
        sendToRemote(data);
      });
    } else {
      window.postMessage(data);
    }

    return
  }


  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(data)
  }
}

export class Remote extends EventEmitter {
  constructor() {
    super();

    this.ready = new Promise(resolve => {
      this.once(Events.READY, () => {
        resolve(this);
      });
    })
  }

  sendJSON(json) {
    sendToRemote(stringify('json', json));
  }

  send(string) {
    sendToRemote(stringify('text', string));
  }

  emit(eventName, eventData, fromRN) {
    if (fromRN) {
      super.emit(eventName, eventData);
      return;
    }

    sendToRemote(stringify('event', eventData, { eventName }));
  }
}

import WKWebView from 'react-native-wkwebview-reborn'
import { withMessaging } from './hoc';

export const WebView = withMessaging(WKWebView);

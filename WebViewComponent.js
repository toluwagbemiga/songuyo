import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewComponent = () => {
  const injectedJS = `
    // Injected CSS styles
    var css = \`
      
      .las.la-search.la-flip-horizontal.la-2x {
        margin-right: 5%;
        position: absolute;
        right: 6%;
        top: 26px;
      }
      .row.align-items-center.gutters-5 {
        background-color: #111;
      }
      
    \`;

    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  `;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://songuyo.com' }} // Replace with your desired URL
        style={styles.webView}
        injectedJavaScript={injectedJS}
        javaScriptEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebViewComponent;

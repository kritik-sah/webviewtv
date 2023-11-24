/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://zo.xyz/pg/sdr/'}} style={{flex: 1}} />
    </View>
  );
}

export default App;

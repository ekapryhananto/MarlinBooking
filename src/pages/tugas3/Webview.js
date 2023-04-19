import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native';

const Webview = () => {
  return (
    <WebView
      source={{
        uri: 'https://github.com/facebook/react-native',
      }}
      style={{marginTop: 20}}
    />
  );
};

export default Webview;

const styles = StyleSheet.create({});

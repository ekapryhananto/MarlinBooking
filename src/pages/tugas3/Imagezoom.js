import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';

const Imagezoom = () => {
  const images = [
    {
      url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
    },
    {
      url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageViewer imageUrls={images} renderIndicator={() => null} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});

export default Imagezoom;

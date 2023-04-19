import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';

const Renderhtml = () => {
  const {width} = useWindowDimensions();
  const source = {
    html: `
      <p style='text-align:center;'>
        RENDER HTML
      </p>`,
  };
  return <RenderHTML contentWidth={width} source={source} />;
};
export default Renderhtml;

const styles = StyleSheet.create({});

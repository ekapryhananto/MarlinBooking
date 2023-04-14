import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Button, PermissionsAndroid} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';

const ProgresVieww = () => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Progress View
      </Text>
      <ProgressView
        progressTinColor="orange"
        trackTinColor="blue"
        progress={0.7}
      />
    </View>
  );
};

export default ProgresVieww;

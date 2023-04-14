import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Button, PermissionsAndroid} from 'react-native';
import Slider from '@react-native-community/slider';

const Sliderr = () => {
  const [slider, setSlider] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Slider
      </Text>
      <Text>{slider}</Text>
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        step={1}
        value={slider}
        onValueChange={slider => setSlider(slider)}
      />
    </View>
  );
};

export default Sliderr;

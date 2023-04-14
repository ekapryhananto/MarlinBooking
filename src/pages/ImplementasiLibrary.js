import React from 'react';
import {Text, View, ScrollView, Button, PermissionsAndroid} from 'react-native';
import styles from '../components/css';
import ProgresBarAndroid from './tugas3/ProgresBarAndroid';
import Geolocationn from './tugas3/Geolocation';
import Sliderr from './tugas3/Slider';
import DateTimePickerr from './tugas3/DateTimePicker';
import NetInfoo from './tugas3/NetInfo';
import ProgresVieww from './tugas3/ProgesView';
import Clipboardd from './tugas3/Clipboard';
import AsyncStoragee from './tugas3/AsyncStorage';
import Carousell from './tugas3/Carousel';

const ImplementasiLibrary = () => {
  return (
    <ScrollView style={styles.container}>
      <NetInfoo />
      <DateTimePickerr />
      <Sliderr />
      <Geolocationn />
      <ProgresVieww />
      <ProgresBarAndroid />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Clipboard
      </Text>
      <Clipboardd />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        AsyncStorage
      </Text>
      <AsyncStoragee />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Carousel
      </Text>
      <Carousell />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Net Info
      </Text>

      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Net Info
      </Text>
    </ScrollView>
  );
};

export default ImplementasiLibrary;

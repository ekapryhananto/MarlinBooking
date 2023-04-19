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
import BottomSign from '../components/BottomSign';
import LinearGradient from 'react-native-linear-gradient';
import Renderhtml from './tugas3/Renderhtml';
import Sharee from './tugas3/Share';
import Skeleton from './tugas3/Skeleton';
import Webview from './tugas3/Webview';
import Tooltipp from './tugas3/Tooltipp';

const ImplementasiLibrary = ({navigation}) => {
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
        Image zoom viewer
      </Text>
      <BottomSign
        onPress={() => navigation.navigate('Imagezoom')}
        text="Imagezoom"
        color="#2E3283"
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Linear gradient
      </Text>
      <LinearGradient
        colors={['#333', '#514EBC']}
        style={{width: 319, height: 117, alignSelf: 'center'}}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Render HTML
      </Text>
      <Renderhtml />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Share
      </Text>
      <Sharee />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Skeleton placeholder
      </Text>
      <Skeleton />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Webview
      </Text>
      <Webview />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Tooltip
      </Text>
      <Tooltipp />
    </ScrollView>
  );
};

export default ImplementasiLibrary;

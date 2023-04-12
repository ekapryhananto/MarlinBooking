import React from 'react';
import styles from '../components/css';
import {Image, Text, View} from 'react-native';
import BottomNav from '../../BottomNav';
// import BottomNav from '../../BottomNav';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerHome}
        source={require('../MarlinSampleBannerBannerApp.png')}
      />
      <Text>Hallo World</Text>
      <BottomNav />
    </View>
  );
};

export default Home;

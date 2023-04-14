import React from 'react';
import styles from '../components/css';
import {Image, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2E3283', '#243FA1']} style={styles.bannerHome}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 69, height: 16, marginTop: 10, marginLeft: 20}}
            source={require('../marlinlogoputih.png')}
          />
          <Icon
            name="notifications"
            size={22}
            color="white"
            style={{
              justifyContent: 'center',
              right: 0,
              position: 'absolute',
              marginTop: 10,
              marginRight: 20,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 27, marginLeft: 26}}>
          <View
            style={{
              height: 39,
              width: 39,
              backgroundColor: 'white',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18}}>EP</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView style={styles.mainHome}></ScrollView>
    </View>
  );
};

export default Home;

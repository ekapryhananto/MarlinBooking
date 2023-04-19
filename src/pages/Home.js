import React from 'react';
import styles from '../components/css';
import {Image, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import SliderHL from '../components/Slider';

const Home = () => {
  return (
    <ScrollView style={styles.containerHome}>
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
            style={styles.iconNotifHome}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 27, marginLeft: 26}}>
          <View style={styles.logoProfilHome}>
            <Text style={{fontSize: 18}}>EP</Text>
          </View>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>Welcome, </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Eka Pryhananto
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="wallet" color="white" size={20} />
              <Text style={{color: 'white', marginLeft: 5}}>150.000 MP</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.mainHome}>
        <LinearGradient
          colors={['#2E3283', '#514EBC']}
          style={styles.highlightHome}>
          <SliderHL />
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Home;

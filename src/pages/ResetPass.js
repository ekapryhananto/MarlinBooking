import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import InputDataEmail from '../components/InputDataEmail';
import styles from '../components/css';
import BottomSign from '../components/BottomSign';

const ResetPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backbutton}
          source={require('../backbutton.png')}
        />
      </TouchableOpacity>
      <Image style={styles.imgLogoSignUp} source={require('../logo.png')} />
      <Text style={styles.text}>Reset Password</Text>
      <InputDataEmail state={email} set={setEmail} placeholder="Email" />
      <BottomSign text="Request Reset" color="#2E3283" />
    </View>
  );
};

export default ResetPass;

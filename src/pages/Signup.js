import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import InputDataName from '../components/InputDataName';
import InputDataEmail from '../components/InputDataEmail';
import InputDataphone from '../components/InputDataPhone';
import InputDataPass from '../components/InputDataPass';
import BottomSign from '../components/BottomSign';
import styles from '../components/css';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.imgLogoSignUp} source={require('../logo.png')} />
      <Text style={styles.text}>Create an account</Text>
      <InputDataName state={name} set={setName} placeholder="Name" />
      <InputDataEmail state={email} set={setEmail} placeholder="Email" />
      <InputDataphone state={phone} set={setPhone} placeholder="Phone" />
      <InputDataPass
        state={pass}
        set={setPass}
        placeholder="Password"
        isPassword={true}
      />
      <BottomSign text="SignUp" color="#2E3283" />
      <View style={styles.footer}>
        <Text>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontWeight: 'bold'}}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

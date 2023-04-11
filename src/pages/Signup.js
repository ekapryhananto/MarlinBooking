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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../logo.png')} />
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
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold'}}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  imgLogo: {
    width: 190.15,
    height: 44.87,
    marginTop: 140,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    width: 400,
    textAlign: 'center',
    marginTop: 18,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;

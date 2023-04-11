import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import InputDataName from '../components/InputDataName';
import InputDataPass from '../components/InputDataPass';
import BottomSign from '../components/BottomSign';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../logo.png')} />
      <Text style={styles.text}>Please sign in to continue</Text>
      <InputDataName
        state={username}
        set={setUsername}
        placeholder="Username"
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <InputDataPass
          state={pass}
          set={setPass}
          placeholder="Password"
          isPassword={true}
          icon={
            <Image
              style={{
                height: 14,
                width: 24.18,
              }}
              source={require('../Intersect.png')}
            />
          }
        />
      </View>
      <BottomSign text="Sign in" color="#2E3283" />
      <TouchableOpacity>
        <Text style={styles.resetPas}>Forgot password</Text>
      </TouchableOpacity>

      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginTop: 40.8}}>
        <View style={styles.garis} />
        <Text style={{color: '#2E3283'}}>Login with</Text>
        <View style={styles.garis} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 28.4,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image
            style={{height: 46.1, width: 46.1, marginHorizontal: 22.44}}
            source={require('../image6.png')}
          />
        </TouchableOpacity>

        <Image
          style={{height: 31.61, width: 32.61, marginHorizontal: 22.44}}
          source={require('../image7.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 28.4,
        }}>
        <Text style={{marginHorizontal: 22.44, marginTop: 33}}>
          App Version
        </Text>
        <Text style={{marginHorizontal: 22.44, marginTop: 33}}>2.8.3</Text>
      </View>

      <View style={styles.footer}>
        <Text>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontWeight: 'bold'}}> Sign up</Text>
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
    marginTop: 95,
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
  resetPas: {
    alignSelf: 'center',
    marginTop: 17,
    color: '#2E3283',
  },
  garis: {
    justifyContent: 'center',
    height: 1,
    width: 93.83,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginHorizontal: 14.69,
  },
});

export default SignIn;

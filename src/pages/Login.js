import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import InputDataName from '../components/InputDataName';
import InputDataPass from '../components/InputDataPass';
import BottomSign from '../components/BottomSign';
import styles from '../components/css';

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
      <BottomSign
        onPress={() => navigation.navigate('Home')}
        text="Sign in"
        color="#2E3283"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ResetPass')}>
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

export default SignIn;

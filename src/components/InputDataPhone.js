import React from 'react';
import {TextInput, View} from 'react-native';

const InputDataphone = props => {
  return (
    <View style={{alignSelf: 'center'}}>
      <TextInput
        value={props.state}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          fontSize: 14,
          elevation: 2,
          width: 273,
          height: 43,
          marginTop: 17,
          paddingLeft: 17.63,
        }}
        placeholder={props.placeholder}
        onChangeText={text => props.set(text)}
        // secureTextEntry={props.isPassword}
      />
    </View>
  );
};

export default InputDataphone;

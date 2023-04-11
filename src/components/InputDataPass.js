import React from 'react';
import {TextInput, View} from 'react-native';

const InputDataPass = props => {
  return (
    <View
      style={{
        // alignSelf: 'center',
        backgroundColor: 'aqua',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        fontSize: 14,
        elevation: 2,
        width: 273,
        height: 43,
        marginTop: 17,
        paddingHorizontal: 17.63,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextInput
        value={props.state}
        placeholder={props.placeholder}
        onChangeText={text => props.set(text)}
        secureTextEntry={props.isPassword}
      />
      {!props?.icon ? null : props.icon}
    </View>
  );
};

export default InputDataPass;

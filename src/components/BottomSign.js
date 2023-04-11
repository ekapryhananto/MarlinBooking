import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const BottomSign = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        marginTop: 17,
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 2,
        width: 288,
        height: 48,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#FFFFFF',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomSign;

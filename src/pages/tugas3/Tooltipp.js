import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Tooltip from 'rn-tooltip';
import {TouchableHighlight} from 'react-native';

const Tooltipp = () => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <View style={{marginBottom: 50}}>
      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    </View>
  );
};

export default Tooltipp;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#f5821f',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
});

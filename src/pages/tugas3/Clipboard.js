// React Native Copy to Clipboard
// https://aboutreact.com/react-native-copy-to-clipboard/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// Using Clipboard API
import Clipboard from '@react-native-community/clipboard';

const Clipboardd = () => {
  const [input1, setInput1] = useState('');

  const readFromClipboard = async () => {
    //To get the text from clipboard
    let clipboardContent = await Clipboard.getString();
    alert('Text from Clipboard: ' + clipboardContent);
  };

  const writeToClipboard = async () => {
    //To copy the text to clipboard
    Clipboard.setString(input1);
    alert('Copied to Clipboard!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={input1 => setInput1(input1)}
        value={input1}
        placeholder="Type here..."
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={writeToClipboard}>
          <Text style={styles.buttonTextStyle}>Copy to Clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={readFromClipboard}>
          <Text style={styles.buttonTextStyle}>Get from Clipboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Clipboardd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: '50%',
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

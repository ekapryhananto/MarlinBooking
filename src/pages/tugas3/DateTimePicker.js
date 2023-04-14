import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Button, PermissionsAndroid} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerr = () => {
  const [isShowDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showDate = () => {
    setShowDate(true);
  };
  const onChange = (event, value) => {
    setDate(value);
    setIsPickerShow(false);
  };

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Date Time Picker
      </Text>
      <Text>{date.toTimeString()}</Text>
      <Text>{date.toISOString()}</Text>
      <Text>{date.toDateString()}</Text>
      <Text>{date.toLocaleDateString()}</Text>
      <Text>{date.toUTCString()}</Text>
      {!isShowDate && (
        <View style={{padding: 30}}>
          <Button title="Show Date" color="#2E3283" onPress={showDate} />
        </View>
      )}
      {isShowDate && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'android' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerr;

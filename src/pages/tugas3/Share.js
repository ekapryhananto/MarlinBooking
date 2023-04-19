import {Alert, Share, View, Button} from 'react-native';
import React from 'react';

const Sharee = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      //   if (result.action === Share.sharedAction) {
      //     if (result.activityType) {
      //       // shared with activity type of result.activityType
      //     } else {
      //       // shared
      //     }
      //   } else if (result.action === Share.dismissedAction) {
      //     // dismissed
      //   }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{marginTop: 10}}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default Sharee;

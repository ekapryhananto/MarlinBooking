import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          <Image
            style={{width: 120, height: 20}}
            src={{uri: 'https://picsum.photos/id/11/200/300'}}
          />
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>
            Hello world
          </Text>
        </View>
      </View>
    </SkeletonPlaceholder>
    // <View>
    //   <Text>Hallo world</Text>
    // </View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({});

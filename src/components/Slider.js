import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Data from '../data';
import SliderItem from './Slideritem';

const SliderHL = () => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SliderHL;

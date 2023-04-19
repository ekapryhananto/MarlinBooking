import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const SliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.price}> {item.price}</Text>
        <Text style={styles.description}> {item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 117,
    width: 319,
  },
  image: {
    width: 100,
    height: 134,
  },
  content: {
    marginLeft: 40,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 7,
    marginVertical: 12,
    color: 'white',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SliderItem;

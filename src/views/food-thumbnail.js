import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './../styles';

const FoodThumbnail = ({ food }) => (
  <View style={ styles.oGridItem }>
    <View style={ styles.oGridItemInner }>
      <Image style={ { flex: 1 } } source={ { uri: food.imageUrlSmall } } />
      <Text style={ [styles.oGridItemText, styles.cTextMed] }>
        { food.name }
      </Text>
    </View>
  </View>
);

export {
  FoodThumbnail
};

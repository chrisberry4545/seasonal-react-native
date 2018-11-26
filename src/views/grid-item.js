import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles';

const GridItem = ({ imageUrlSmall, text }) => (
  <View style={ styles.oGridItem }>
    <Image style={ styles.oGridItemImage } source={ { uri: imageUrlSmall } } />
    <Text style={ [styles.oGridItemText, styles.cTextMed] }>
      { text }
    </Text>
  </View>
);

export {
  GridItem
};

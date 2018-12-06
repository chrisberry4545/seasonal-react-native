import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

const GridItem = ({  evenGridItem, imageUrlSmall, text, onPress }) => (
  <TouchableOpacity
    style={ styles.oGridItem }
    onPress={ onPress }
    activeOpacity={ onPress ? 0.2 : 1 }
  >
    <View style={ [
      styles.oGridItemInner,
      evenGridItem ? styles.oGridItemInnerEven : styles.oGridItemInnerOdd
    ] }>
      <Image style={ styles.oGridItemImage } source={ { uri: imageUrlSmall } } />
      <Text style={ [styles.oGridItemText, styles.cTextMed] }>
        { text }
      </Text>
    </View>
  </TouchableOpacity>
);

export {
  GridItem
};

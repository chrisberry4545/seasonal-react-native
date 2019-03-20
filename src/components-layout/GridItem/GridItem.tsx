import React, { SFC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

export const GridItem: SFC<{
  evenGridItem?: boolean,
  imageUrlSmall: string,
  text: string,
  onPress?: () => void
}> = ({  evenGridItem, imageUrlSmall, text, onPress }) => (
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

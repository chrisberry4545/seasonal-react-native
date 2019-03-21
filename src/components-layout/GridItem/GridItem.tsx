import React, { SFC } from 'react';
import { Image, View, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { TextMedium, BareButton } from '../../components-elements';
import { styles } from '../../styles';

const gridPadding = 18;

const styleGridItem: ViewStyle = {
  aspectRatio: 1,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  marginBottom: gridPadding,
  paddingBottom: gridPadding,
  width: '50%'
};

const styleGridItemInner: ViewStyle = {
  flex: 1
};

const styleGridItemInnerEven: ViewStyle = {
  paddingRight: 10
};

const styleGridItemInnerOdd: ViewStyle = {
  paddingLeft: 10
};

const styleGridItemImage: ImageStyle = {
  borderRadius: 15,
  flex: 1
};

const styleGridItemText: ViewStyle = {
  marginTop: gridPadding
};

export const GridItem: SFC<{
  evenGridItem?: boolean,
  imageUrlSmall: string,
  text: string,
  onPress?: () => void
}> = ({  evenGridItem, imageUrlSmall, text, onPress }) => (
  <BareButton
    style={ styleGridItem }
    onPress={ onPress }
    activeOpacity={ onPress ? 0.2 : 1 }
  >
    <View style={ [
      styleGridItemInner,
      evenGridItem ? styleGridItemInnerEven : styleGridItemInnerOdd
    ] }>
      <Image style={ styleGridItemImage } source={ { uri: imageUrlSmall } } />
      <TextMedium style={ styleGridItemText }>
        { text }
      </TextMedium>
    </View>
  </BareButton>
);

import React, { FC } from 'react';
import { Image, View, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { TextMedium, BareButton } from '../../components-elements';
import { styles } from '../../styles';
import { IImageGridItem } from './ImageGridItem.interface';

const gridPadding = 18;

const styleImageGridItem: ViewStyle = {
  aspectRatio: 1,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  marginBottom: gridPadding,
  paddingBottom: gridPadding,
  width: '50%'
};

const styleImageGridItemInner: ViewStyle = {
  flex: 1
};

const styleImageGridItemInnerEven: ViewStyle = {
  paddingRight: 10
};

const styleImageGridItemInnerOdd: ViewStyle = {
  paddingLeft: 10
};

const styleImageGridItemImage: ImageStyle = {
  borderRadius: 15,
  flex: 1
};

const styleImageGridItemText: ViewStyle = {
  marginTop: gridPadding
};

export const ImageGridItem: FC<IImageGridItem> = ({
  id,
  evenGridItem,
  name,
  imageUrlSmall,
  onClick
}) => (
  <BareButton
    style={ styleImageGridItem }
    onClick={() => {
      if (onClick) {
        onClick(id);
      }
    }}
    activeOpacity={ onClick ? 0.2 : 1 }
  >
    <View style={ [
      styleImageGridItemInner,
      evenGridItem ? styleImageGridItemInnerEven : styleImageGridItemInnerOdd
    ] }>
      <Image style={ styleImageGridItemImage } source={ { uri: imageUrlSmall } } />
      <TextMedium style={ styleImageGridItemText }>
        { name }
      </TextMedium>
    </View>
  </BareButton>
);

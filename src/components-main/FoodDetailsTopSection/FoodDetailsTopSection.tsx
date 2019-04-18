import React, { FC } from 'react';

import {
  BareButton,
  TextHeadingMedium,
  ArrowIcon
} from '../../components-elements';

import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';
import { View, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const iconWidth = 30;

const styleFoodDetailsTopSection: ViewStyle = {
  height: 300
};

const styleFoodDetailsTopSectionInner: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  height: 50,
  marginBottom: 6,
  marginTop: 4
};

const styleFoodDetailsTopSectionText: TextStyle = {
  flex: 1,
  marginRight: iconWidth,
  textAlign: 'center'
};

const styleFoodDetailsTopSectionImage: ImageStyle = {
  borderRadius: 15,
  flex: 1
};

export const FoodDetailsTopSection: FC<IFoodDetailsTopSectionProps> = ({
  foodImageUrl,
  foodName,
  isLoading,
  onGoBack
}) => (
  !isLoading
    ? <View style={styleFoodDetailsTopSection}>
    <View style={styleFoodDetailsTopSectionInner}>
      <BareButton
        onClick={onGoBack}>
        <ArrowIcon size={iconWidth} />
      </BareButton>
      <TextHeadingMedium style={styleFoodDetailsTopSectionText}>
        {foodName}
      </TextHeadingMedium>
    </View>
    {
      foodImageUrl &&
        <Image
          style={styleFoodDetailsTopSectionImage}
          source={{ uri: foodImageUrl }} />
    }
  </View>
  : null
);

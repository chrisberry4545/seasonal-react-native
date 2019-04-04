import React from 'react';

import {
  BareButton,
  TextHeadingMedium
} from '../../components-elements';

import {
  IFoodDetailsTopSectionInputProps
} from './FoodDetailsTopSection.interface';
import { Ionicons } from '@expo/vector-icons';
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

export const FoodDetailsTopSection = ({
  foodImageUrl,
  foodName,
  isLoading,
  navigation
}: IFoodDetailsTopSectionInputProps) => (
  !isLoading
    ? <View style={styleFoodDetailsTopSection}>
    <View style={styleFoodDetailsTopSectionInner}>
      <BareButton
        onPress={() => {
          if (navigation) {
            navigation.goBack();
          }
        }}>
        <Ionicons name='ios-arrow-round-back' size={iconWidth} />
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

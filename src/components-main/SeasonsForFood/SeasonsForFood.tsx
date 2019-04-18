import React, { FC } from 'react';

import {
  TextMedium,
  TextHeadingMedium,
  TextSmall,
  BareButton
} from '../../components-elements';

import { ISeasonForFoodProps } from './SeasonsForFood.interface';
import { View, ViewStyle, TextStyle } from 'react-native';
import { styles } from '../../styles';

const styleSeasonsForFood: TextStyle = {
  alignItems: 'center',
  flex: 1
};

const styleSeasonsForFoodTitle: TextStyle = {
  marginBottom: 10,
  marginTop: 10,
  textAlign: 'center',
  width: '100%'
};

const styleSeasonsForFoodSeasonWrapper: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: 16,
  maxWidth: 300
};

const styleSeasonsForFoodSeason: ViewStyle = {
  alignItems: 'center',
  backgroundColor: styles.colors.greyMed,
  borderColor: styles.colors.greyMed,
  borderWidth: 1,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  margin: 6,
  width: 50
};

const styleSeasonsForFoodSeasonSelected: ViewStyle = {
  backgroundColor: styles.colors.backgroundColor
};

const styleSeasonsForFoodSeasonKey: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginBottom: 6,
  width: '100%'
};

const styleSeasonsForFoodSeasonKeyText: TextStyle = {
  marginRight: 8,
  opacity: 0.6
};

const styleSeasonsForFoodSeasonKeyMarker: ViewStyle = {
  ...styleSeasonsForFoodSeason,
  height: 24,
  margin: 0,
  width: 24
};

const styleSeasonsForFoodSeasonKeyMarkerSelected: ViewStyle = {
  ...styleSeasonsForFoodSeasonSelected
};

export const SeasonsForFood: FC<ISeasonForFoodProps> = ({
  isLoading,
  seasonsSelectedForFood,
  onSeasonSelected
}) => (
  !isLoading
    ? <View style={styleSeasonsForFood}>
    <TextHeadingMedium style={styleSeasonsForFoodTitle}>
      When are they in season?
    </TextHeadingMedium>
    <View style={styleSeasonsForFoodSeasonWrapper}>
      {
        seasonsSelectedForFood && seasonsSelectedForFood.map((
          {
            isSelected,
            name
          },
          seasonIndex
        ) => (
          <BareButton
            style={ [
              styleSeasonsForFoodSeason,
              ...(
                isSelected ?
                  [styleSeasonsForFoodSeasonSelected]
                  : []
              )
            ] }
            key={name}
            onClick={ () => onSeasonSelected(seasonIndex)}>
            <TextMedium>
              { name.substring(0, 3) }
            </TextMedium>
          </BareButton>
        ))
      }
    </View>
    <View style={styleSeasonsForFoodSeasonKey}>
      <TextSmall style={styleSeasonsForFoodSeasonKeyText}>
        In season
      </TextSmall>
      <View style={ [
        styleSeasonsForFoodSeasonKeyMarker,
        styleSeasonsForFoodSeasonKeyMarkerSelected
      ] } />
    </View>
    <View style={styleSeasonsForFoodSeasonKey}>
      <TextSmall style={styleSeasonsForFoodSeasonKeyText}>
        Not in season
      </TextSmall>
      <View style={ styleSeasonsForFoodSeasonKeyMarker } />
    </View>
  </View>
  : null
);

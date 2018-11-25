import React from 'react';
import { Image, Text, View } from 'react-native';

import {
  styles
} from './../styles';

const SeasonRecipeSection = ({ recipes }) => (
  <View>
    <Text style={ styles.cHeadingMed }>Recipe ideas</Text>
    <View style={ styles.oGrid }>
    {
      recipes && recipes.map((recipe) =>  (
        <View key={ recipe.id } style={ styles.oGridItem }>
          <View style={ styles.oGridItemInner }>
            <Image style={ { flex: 1 } } source={ { uri: recipe.imageUrlSmall } } />
            <Text style={ [styles.oGridItemText, styles.cTextMed] }>
              { recipe.name }
            </Text>
          </View>
        </View>
      ))
    }
    </View>
  </View>
);

export {
  SeasonRecipeSection
};

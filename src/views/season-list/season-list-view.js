import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import {
  styles
} from '../../styles';

const SeasonListView = ({ seasonData, onSeasonClicked }) => (
  <ScrollView style={ styles.cSeasonalList }
    contentContainerStyle={ styles.cSeasonalListScrollViewInner }>
    {
      !seasonData ?
      <ActivityIndicator size="large" style={ styles.cLoadingIndicator } />
      : (
        <View style={ styles.cSeasonalListMainView }>
          { seasonData.map(({ id, name }, index) => (
            <TouchableOpacity
              onPress={ () => onSeasonClicked(index) }
              key={ id }
              style={ styles.cSeasonalListButton }>
              <Text style={ styles.cTextLarge }>{ name }</Text>
            </TouchableOpacity>
          )) }
        </View>
      )
    }
  </ScrollView>
);

export {
  SeasonListView
};

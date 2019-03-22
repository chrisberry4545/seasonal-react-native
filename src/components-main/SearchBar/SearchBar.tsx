import React, { SFC } from 'react';

import { ISearchBarProps } from './SearchBar.interface';
import {
  Input
} from '../../components-elements';

import {
  BareButton
} from '../../components-elements';
import { Ionicons } from '@expo/vector-icons';
import { View, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

const styleSearchBar: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  left: 0,
  paddingBottom: 17,
  paddingRight: 12,
  paddingTop: 22,
  position: 'absolute',
  right: 0,
  top: 0
};

const styleSearchBarInputWrapper: ViewStyle = {
  backgroundColor: colors.backgroundColor,
  bottom: 0,
  flexDirection: 'row',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
};

const styleSearchBarCloseIcon: ViewStyle = {
  position: 'absolute',
  right: 12,
  top: 14
};

export const SearchBar: SFC<ISearchBarProps> = ({
  isSearchBarVisible,
  onHideSearchBar,
  onSearchChanged,
  onShowSearchBar
}) => (
  <View style={ styleSearchBar }>
    <BareButton
      onPress={onShowSearchBar}>
      <Ionicons name='ios-search'
        size={ 24 }/>
    </BareButton>
    {
      isSearchBarVisible
       ? <View style={ styleSearchBarInputWrapper }>
          <Input
            autoFocus
            onChangeText={(newSearchTerm) => onSearchChanged(newSearchTerm)}
            placeholder='Search'/>
          <BareButton
            onPress={onHideSearchBar}>
            <Ionicons name='ios-close'
              style={ styleSearchBarCloseIcon }
              size={ 40 } />
          </BareButton>
        </View>
        : null
    }
  </View>
);

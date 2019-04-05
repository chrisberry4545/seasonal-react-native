import React, { Fragment } from 'react';

import {
  BareButton,
  TextMedium,
  LoadingSpinner
} from '../../components-elements';

import { ISideMenuProps } from './SideMenu.interface';
import { ViewStyle, TextStyle, View } from 'react-native';
import { styles } from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';

const styleSideMenu: ViewStyle = {
  flex: 1,
  marginBottom: 60,
  paddingTop: 60
};

const styleSideMenuInner: ViewStyle = {
  flex: 1
};

const styleSideMenuButton: TextStyle = {
  padding: 18
};

const styleSideMenuButtonSelected: TextStyle = {
  backgroundColor: styles.colors.greyLight
};

const styleSideMenuLoadingSpinner: ViewStyle = {
  flex: 1
};

export const SideMenu = ({
  allBasicSeasonData,
  currentSeasonIndex,
  isLoading,
  onSeasonSelected,
  onGoToAboutUsPage
}: ISideMenuProps) => (
  <View style={styleSideMenu}>
    <ScrollView style={styleSideMenuInner}>
      {
        !isLoading
          ? (<Fragment>
            {
              allBasicSeasonData &&
              allBasicSeasonData.map(({ name }, index) => (
                <BareButton
                  key={name}
                  style={[
                    styleSideMenuButton,
                    ...(
                      index === currentSeasonIndex
                        ? [styleSideMenuButtonSelected]
                        : []
                    )
                  ]}
                  onClick={() => onSeasonSelected(index)}>
                  <TextMedium>{ name }</TextMedium>
                </BareButton>
              ))
            }
            <BareButton onClick={onGoToAboutUsPage} style={styleSideMenuButton}>
              <TextMedium>About us</TextMedium>
            </BareButton>
            </Fragment>)
          : <LoadingSpinner style={styleSideMenuLoadingSpinner} />
      }
    </ScrollView>
  </View>
);

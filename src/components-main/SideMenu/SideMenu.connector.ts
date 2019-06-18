import { connect } from 'react-redux';
import {
  SideMenu
} from './SideMenu';
import {
  selectAllBasicSeasons,
  selectIsBasicSeasonsLoading,
  selectSeason,
  selectCurrentSeasonIndex,
  goToAllSeasonsView
} from '@chrisb-dev/seasonal-shared';
import {
  goToAboutUsPage
} from '../../store';

import { IState } from '../../interfaces';
import {
  ISideMenuInputProps,
  ISideMenuDispatchProps
} from './SideMenu.interface';
import { Dispatch } from 'redux';
import { getIsCurrentRouteAllSeasons, getIsCurrentRouteAboutUs, getIsCurrentRouteSeasonDetails } from '../../services';

const mapStateToProps = (
  state: IState
): ISideMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasons(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isCurrentRouteAboutUs: getIsCurrentRouteAboutUs(),
  isCurrentRouteAllSeasons: getIsCurrentRouteAllSeasons(),
  isCurrentRouteSeasonDetails: getIsCurrentRouteSeasonDetails(),
  isLoading: selectIsBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISideMenuDispatchProps => ({
  onAllSeasonsSelected: () => dispatch(goToAllSeasonsView()),
  onGoToAboutUsPage: () => dispatch(goToAboutUsPage()),
  onSeasonSelected: (
    seasonIndex: number
  ) => dispatch(selectSeason(seasonIndex))
});

export const SideMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

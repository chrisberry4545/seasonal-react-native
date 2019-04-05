import { connect } from 'react-redux';
import {
  SideMenu
} from './SideMenu';
import {
  selectAllBasicSeasonData,
  selectIsBasicSeasonDataLoading,
  selectSeason,
  selectCurrentSeasonIndex,
  goToAboutUsPage
} from '../../store';

import { IState } from '../../interfaces';
import {
  ISideMenuInputProps,
  ISideMenuDispatchProps
} from './SideMenu.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISideMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasonData(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isLoading: selectIsBasicSeasonDataLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISideMenuDispatchProps => ({
  onGoToAboutUsPage: () => dispatch(goToAboutUsPage()),
  onSeasonSelected: (seasonIndex: number) => dispatch(selectSeason(seasonIndex))
});

export const SideMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

import {
  ISeasonDetailsContentWrapperInputProps,
  ISeasonDetailsContentWrapperDispatchProps
} from './SeasonDetailsContentWrapper.interface';

import { connect } from 'react-redux';
import {
  SeasonDetailsContentWrapper
} from './SeasonDetailsContentWrapper';
import {
  selectIsCurrentSeasonLoading,
  setCurrentSeasonDataStart
} from '../../store';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonDetailsContentWrapperInputProps => {
  return {
    isLoading: selectIsCurrentSeasonLoading(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonDetailsContentWrapperDispatchProps => ({
  onInit: (seasonIndex: number) => (
    dispatch((setCurrentSeasonDataStart(seasonIndex)))
  )
});

export const SeasonDetailsContentWrapperConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonDetailsContentWrapper);

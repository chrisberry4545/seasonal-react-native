import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';

import { connect } from 'react-redux';
import {
  SeasonDetailsContentWrapper
} from './SeasonDetailsContentWrapper';
import {
  selectIsCurrentSeasonLoading
} from '../../store';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ISeasonDetailsContentWrapperInputProps => {
  return {
    isLoading: selectIsCurrentSeasonLoading(state)
  };
};

export const SeasonDetailsContentWrapperConnector = connect(
  mapStateToProps
)(SeasonDetailsContentWrapper);

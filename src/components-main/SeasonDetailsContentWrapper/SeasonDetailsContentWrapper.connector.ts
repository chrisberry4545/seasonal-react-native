import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';

import { connect } from 'react-redux';
import {
  SeasonDetailsContentWrapper
} from './SeasonDetailsContentWrapper';
import {
  selectIsBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ISeasonDetailsContentWrapperInputProps => {
  return {
    isLoading: selectIsBasicSeasonsLoading(state)
  };
};

export const SeasonDetailsContentWrapperConnector = connect(
  mapStateToProps
)(SeasonDetailsContentWrapper);

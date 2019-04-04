import { connect } from 'react-redux';
import {
  AppContainer
} from './AppContainer';
import {
  selectAllBasicSeasonData
} from '../store';
import {
  IAppContainerInputProps
} from './AppContainer.interface';
import { IState } from '../interfaces';

const mapStateToProps = (
  state: IState
): IAppContainerInputProps => ({
  seasonData: selectAllBasicSeasonData(state)
});

export const AppContainerConnector = connect(
  mapStateToProps
)(AppContainer);

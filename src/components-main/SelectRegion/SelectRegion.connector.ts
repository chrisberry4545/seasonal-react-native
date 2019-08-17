import { connect } from 'react-redux';
import {
  SelectRegion
} from './SelectRegion';
import {
  selectRegionsSelectOptions, setRegion, goBackFromRegionSelection
} from '@chrisb-dev/seasonal-shared';
import {
  ISelectRegionDispatchProps,
  ISelectRegionInputProps
} from './SelectRegion.interface';
import { Dispatch } from 'redux';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState): ISelectRegionInputProps => ({
  regionsSelectOptions: selectRegionsSelectOptions(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectRegionDispatchProps => ({
  goBackFromRegionSelection: () => dispatch(goBackFromRegionSelection()),
  onRegionSelected: (regionCode: string) => dispatch(setRegion(regionCode))
});

export const SelectRegionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRegion);

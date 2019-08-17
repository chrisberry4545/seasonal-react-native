import { connect } from 'react-redux';
import {
  SelectCountry
} from './SelectCountry';
import {
  selectCountriesSelectOptions, setCountry
} from '@chrisb-dev/seasonal-shared';
import {
  ISelectCountryDispatchProps,
  ISelectCountryInputProps
} from './SelectCountry.interface';
import { Dispatch } from 'redux';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState): ISelectCountryInputProps => ({
  countriesSelectOptions: selectCountriesSelectOptions(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectCountryDispatchProps => ({
  onCountrySelected: (countryId: string) => dispatch(setCountry(countryId))
});

export const SelectCountryConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCountry);

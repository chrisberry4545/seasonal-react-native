import { ISelectOption } from '@chrisb-dev/seasonal-shared';

export interface ISelectCountryInputProps {
  countriesSelectOptions: ISelectOption[] | undefined;
}

export interface ISelectCountryDispatchProps {
  onCountrySelected: (countryId: string) => void;
}

export interface ISelectCountryProps
  extends ISelectCountryInputProps, ISelectCountryDispatchProps {}

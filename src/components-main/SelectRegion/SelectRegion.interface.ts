import { ISelectOption } from '@chrisb-dev/seasonal-shared';

export interface ISelectRegionInputProps {
  regionsSelectOptions: ISelectOption[] | undefined;
}

export interface ISelectRegionDispatchProps {
  goBackFromRegionSelection: () => void;
  onRegionSelected: (regionCode: string) => void;
}

export interface ISelectRegionProps
  extends ISelectRegionInputProps, ISelectRegionDispatchProps {}

import { NavigationScreenProp } from 'react-navigation';

export interface ISeasonDetailsContentWrapperInputProps {
  navigation?: NavigationScreenProp<{}>;
  isLoading: boolean;
}

export interface ISeasonDetailsContentWrapperDispatchProps {
  onInit: (seasonIndex: number) => void;
}

export interface ISeasonDetailsContentWrapperProps
  extends ISeasonDetailsContentWrapperInputProps,
    ISeasonDetailsContentWrapperDispatchProps {}

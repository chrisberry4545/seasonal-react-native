import { NavigationScreenProp } from 'react-navigation';
import {
  IFood
} from '@chrisb-dev/seasonal-shared';

export interface ISeasonFoodInputProps {
  navigation?: NavigationScreenProp<{}>;
  food: IFood[] | undefined;
}

export interface ISeasonFoodDispatchProps {
  onFoodClick: (foodItemId: string) => void;
}

export interface ISeasonFoodProps
  extends ISeasonFoodInputProps, ISeasonFoodDispatchProps {}

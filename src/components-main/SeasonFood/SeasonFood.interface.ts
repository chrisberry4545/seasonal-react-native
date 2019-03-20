import { NavigationScreenProp } from 'react-navigation';
import {
  IFood
} from '@chrisb-dev/seasonal-shared';

export interface ISeasonFoodInputProps {
  navigation?: NavigationScreenProp<{}>;
  food: IFood[] | undefined;
}

import { NavigationScreenProp } from 'react-navigation';
import {
  IRecipe
} from '@chrisb-dev/seasonal-shared';

export interface ISeasonRecipesInputProps {
  navigation?: NavigationScreenProp<{}>;
  recipes: IRecipe[] | undefined;
}

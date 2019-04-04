import { ISelectableItem } from '@chrisb-dev/seasonal-shared';
import { NavigationScreenProp } from 'react-navigation';

export interface ISeasonForFoodInputProps {
  navigation?: NavigationScreenProp<{}>;
  isLoading: boolean;
  seasonsSelectedForFood: ISelectableItem[] | undefined;
}

export interface ISeasonForFoodDispatchProps {
  onSeasonSelected: (seasonIndex: number) => void;
}

export interface ISeasonForFoodProps
  extends ISeasonForFoodInputProps, ISeasonForFoodDispatchProps {}

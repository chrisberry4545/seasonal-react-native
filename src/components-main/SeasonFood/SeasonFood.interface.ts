import {
  IFood
} from '@chrisb-dev/seasonal-shared';

export interface ISeasonFoodInputProps {
  food: IFood[] | undefined;
}

export interface ISeasonFoodDispatchProps {
  onFoodClick: (foodItemId: string) => void;
}

export interface ISeasonFoodProps
  extends ISeasonFoodInputProps, ISeasonFoodDispatchProps {}

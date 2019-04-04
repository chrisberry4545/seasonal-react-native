import {
  IHydratedFood
} from '@chrisb-dev/seasonal-shared';

export interface ICurrentFoodDetailsDataState {
  isLoading: boolean;
  data?: IHydratedFood;
}

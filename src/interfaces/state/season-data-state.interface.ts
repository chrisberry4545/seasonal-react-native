import { IBaseSeason } from '@chrisb-dev/seasonal-shared';

export interface ISeasonDataState {
  isLoading: boolean;
  data?: IBaseSeason[];
}

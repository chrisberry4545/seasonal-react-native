import {
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared';

export interface ICurrentSeasonDataState {
  isLoading: boolean;
  data?: IHydratedSeason;
}

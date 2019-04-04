import {
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared';

export interface ICurrentSeasonDataState {
  currentSeasonIndex: number;
  isLoading: boolean;
  data?: IHydratedSeason;
}

import { IUiState } from './ui-state.interface';
import { ICurrentSeasonDataState } from './current-season-data-state.interface';

export interface IState {
  currentSeasonData: ICurrentSeasonDataState;
  ui: IUiState;
}

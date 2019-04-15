import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';

export interface ISideMenuInputProps {
  allBasicSeasonData: IHydratedSeason[] | undefined;
  currentSeasonIndex: number;
  isCurrentRouteAllSeasons: boolean;
  isCurrentRouteAboutUs: boolean;
  isCurrentRouteSeasonDetails: boolean;
  isLoading: boolean;
}

export interface ISideMenuDispatchProps {
  onSeasonSelected: (seasonIndex: number) => void;
  onGoToAboutUsPage: () => void;
  onAllSeasonsSelected: () => void;
}

export interface ISideMenuProps
  extends ISideMenuDispatchProps, ISideMenuInputProps {}

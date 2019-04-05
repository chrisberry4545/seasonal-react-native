import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';

export interface ISideMenuInputProps {
  allBasicSeasonData: IHydratedSeason[] | undefined;
  currentSeasonIndex: number;
  isLoading: boolean;
}

export interface ISideMenuDispatchProps {
  onSeasonSelected: (seasonIndex: number) => void;
  onGoToAboutUsPage: () => void;
}

export interface ISideMenuProps
  extends ISideMenuDispatchProps, ISideMenuInputProps {}

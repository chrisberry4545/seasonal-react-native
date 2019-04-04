import { NavigationScreenProp } from 'react-navigation';

export interface IFoodDetailsTopSectionInputProps {
  navigation?: NavigationScreenProp<{}>;
  isLoading: boolean;
  foodName: string | undefined;
  foodImageUrl: string | undefined;
}

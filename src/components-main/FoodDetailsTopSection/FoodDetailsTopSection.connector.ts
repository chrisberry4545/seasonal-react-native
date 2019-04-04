import { connect } from 'react-redux';
import {
  FoodDetailsTopSection
} from './FoodDetailsTopSection';
import {
  selectCurrentFoodDetailsName,
  selectCurrentFoodDetailsImageUrl,
  selectIsFoodDataOrBasicSeasonsLoading
} from '../../store';

import { IState } from '../../interfaces';
import {
  IFoodDetailsTopSectionInputProps
} from './FoodDetailsTopSection.interface';

const mapStateToProps = (
  state: IState
): IFoodDetailsTopSectionInputProps => ({
  foodImageUrl: selectCurrentFoodDetailsImageUrl(state),
  foodName: selectCurrentFoodDetailsName(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

export const FoodDetailsTopSectionConnecter = connect(
  mapStateToProps
)(FoodDetailsTopSection);

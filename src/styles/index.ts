import * as oMainContainer from './o-main-container';
import * as oGrid from './o-grid';
import * as cHeadings from './c-headings';
import * as cText from './c-text';
import * as cLoadingIndicator from './c-loading-indicator';
import * as cAboutUs from './c-about-us';
import * as cCurrentSeasonName from './c-current-season-name';
import * as cNavigationBar from './c-navigation-bar';
import * as cSeasonalDetails from './c-seasonal-details';

export * from './settings';
export const styles = {
  ...oMainContainer,
  ...oGrid,
  ...cHeadings,
  ...cText,
  ...cLoadingIndicator,
  ...cAboutUs,
  ...cCurrentSeasonName,
  ...cNavigationBar,
  ...cSeasonalDetails
};

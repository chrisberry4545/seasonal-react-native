import { Linking } from 'react-native';

const goToLinkUrl = (linkUrl) => {
  if (linkUrl) {
    Linking.openURL(linkUrl);
  }
}

export {
  goToLinkUrl
};

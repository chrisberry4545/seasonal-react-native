const {
  settings
} = require('./../styles/settings');

const textBase = {
  color: settings.colors.primaryText,
  fontFamily: settings.fonts.primary
};

const cText = {
  cTextMed: {
    ...textBase,
    fontSize: 14,
    lineHeight: 14
  },
  cTextLarge: {
    ...textBase,
    fontSize: 16,
    lineHeight: 16
  }
};

export {
  cText
};

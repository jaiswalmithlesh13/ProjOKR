import {Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const Fonts = {
  Bold: 'Hellix-Bold',
  SemiBold: 'Hellix-SemiBold',
  Regular: 'Hellix-Regular',
  Light: 'Hellix-Light',
};

export const FontSize = {
  XMini: 10,
  Mini: 12,
  XSmall: 14,
  Small: 16,
  Medium: 18,
  Large: 22,
  XLarge: 24,
  XXLarge: 28,
  XXXLarge: 34,
  Huge: 40,
  XHuge: 58,
};

export const LineHeight = {
  XMini: 12,
  Mini: 14,
  XSmall: 20,
  Small: 22,
  Medium: 26,
  Large: 30,
  XLarge: 36,
  XXLarge: 40,
  XXXLarge: 46,
  Huge: 50,
  XHuge: 64,
};

export const colors = {
  //common colors
  transparent: 'rgba(0,0,0,0)',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#333333',
  lightestGray: '#E2E2E2',
  lightGray: '#C2C2C2',
  lightWhite: '#F0F0F0',
  lightBlack: '#191919',
  placeholderGray: '#A9A9A9',
  midGray: '#494948',
  grayTint: '#8E8E8E',
  aquaColor: '#48FAFF',
  whiteTransparent: '#FFFFFF00',
  blackTransparent: '#00000000',
  whiteTranslucent: '#FFFFFF15',
  lightOverlay: '#00000088',
  darkOverlay: '#00000044',
  grayShade2: '#747474',
  limeGreen: '#4EB014',
  red: '#E30613',
  headerText: '#000000',

  //new generic set
  primaryBrandColor: '#2F2E41',
  secondaryBrandColor: '#48FAFF',
  errorColor: '#FE0000',
  lightWhiteTranslucent: '#F0F0F033',
  lightRed: '#FF6584',
  grayishBlue: '#2F2E41',
  lightGrayishBlue: '#F9FBFD',
  lightBlue: '#6C63FF',
  darkGrayishBlue: '#3F3D56',
};

export const customDarkTheme = {
  dark: true,
  colors: {
    primaryButtonColor: colors.primaryBrandColor,
    secondaryButtonColor: colors.primaryBrandColor,
    background: colors.black,
    primary: colors.primaryBrandColor,
    secondary: colors.secondaryBrandColor,
    loader: colors.aquaColor,
    primaryText: colors.lightWhite,
    secondaryText: colors.placeholderGray,
    headerText: colors.white,
    disclaimerText: colors.lightWhite,
    placeHolderText: colors.placeholderGray,
    descriptiveText: colors.lightWhite,
    icons: colors.white,
    iconHighlightColor: colors.aquaColor,
    iconColor: colors.white,
    transparentColor: colors.blackTransparent,
    error: colors.errorColor,
    overlayColor: colors.darkOverlay,
    alertColor: colors.darkGray,
    alertShadowColor: colors.grayTint,
    listView: {
      seperatorColor: colors.darkGray,
      background: colors.darkGray,
    },
  },
};

export const customDefaultTheme = {
  dark: false,
  colors: {
    primaryButtonColor: colors.primaryBrandColor,
    secondaryButtonColor: colors.primaryBrandColor,
    background: colors.white,
    primary: colors.primaryBrandColor,
    secondary: colors.secondaryBrandColor,
    loader: colors.aquaColor,
    primaryText: colors.darkGray,
    secondaryText: colors.grayShade2,
    headerText: colors.black,
    disclaimerText: colors.placeholderGray,
    placeHolderText: colors.placeholderGray,
    descriptiveText: colors.grayShade2,
    icons: colors.lightGray,
    iconHighlightColor: colors.aquaColor,
    iconColor: colors.lightGray,
    transparentColor: colors.whiteTransparent,
    error: colors.errorColor,
    overlayColor: colors.lightOverlay,
    alertColor: colors.white,
    alertShadowColor: colors.lightGray,
    listView: {
      seperatorColor: colors.darkGray,
      background: colors.lightGrayishBlue,
    },
  },
};

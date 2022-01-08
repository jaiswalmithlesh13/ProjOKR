import React from 'react';
import {StyleSheet} from 'react-native';
import {Fonts, FontSize, LineHeight} from '../../styles/StyleHub';
import {useTheme} from '@react-navigation/native';


export function StackScreenOptions({route, navigation}) {
  const {colors} = useTheme();
  return {
    headerTitleStyle: [
      NavigationStyles.navigationHeaderTitle,
      {color: colors.headerText},
    ],
    headerTitle: (route.params && route.params.title) || route.name,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 0,
    },
  };
}

const NavigationStyles = StyleSheet.create({
  navigationHeaderTitle: {
    fontSize: FontSize.XLarge,
    lineHeight: LineHeight.XLarge,
  },
});

import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Appearance} from 'react-native';

import {NavigationContainer, useTheme} from '@react-navigation/native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTE_KEYS from './RouteKeys';
import ActivityIndicator from '../../components/ActivityIndicator';
import {ObjectivePage, FilterPage, KeyDetailsPage} from '../../pages';

import {
  customDefaultTheme,
  customDarkTheme,
  FontSize,
  LineHeight,
} from '../../styles/StyleHub';
import {StackScreenOptions} from './NavigationOptions';

const Stack = createStackNavigator();

function AppStackNavigator(props) {
  let systemColorScheme = useColorScheme();
  const [colorTheme, setColorTheme] = useState(customDefaultTheme);

  useEffect(() => {
    let theme =
      Appearance.getColorScheme() === 'dark'
        ? customDarkTheme
        : customDefaultTheme;
    setColorTheme(theme);
  }, []);

  function ObjectiveNavigator() {
    return (
      <Stack.Navigator screenOptions={StackScreenOptions}>
        <Stack.Screen
          name={ROUTE_KEYS.ObjectivePage}
          component={ObjectivePage}
          initialParams={{title: 'OKRs'}}
        />
        {/* <Stack.Screen name={ROUTE_KEYS.FilterPage} component={FilterPage} />
        <Stack.Screen
          name={ROUTE_KEYS.KeyDetailsPage}
          component={KeyDetailsPage}
        /> */}
      </Stack.Navigator>
    );
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorTheme} >
        <ObjectiveNavigator />
      </NavigationContainer >
      <ActivityIndicator/>
    </AppearanceProvider>
  );
}

export default AppStackNavigator;

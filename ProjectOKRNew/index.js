/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import {Text, TextInput, Dimensions} from 'react-native';
 const deviceWidth = Dimensions.get('window').width;
 
//  Text.allowFontScaling = true;
//  Text.defaultProps = Text.defaultProps || {};
//  Text.defaultProps.maxFontSizeMultiplier = deviceWidth > 350 ? 1.25 : 1;
//  TextInput.defaultProps.allowFontScaling = false;
//  TextInput.defaultProps.accessible = true;
 
 AppRegistry.registerComponent(appName, () => App);
 
 /*hide yellow box warning*/
 console.disableYellowBox = true;
import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, ActivityIndicator as Indicator} from 'react-native';
import {useTheme} from '@react-navigation/native';


const styles = StyleSheet.create({
  fullScreenActivityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

export default function ActivityIndicator(props) {
  const {colors} = useTheme();
  const {shouldShow} = useSelector((state) => state.activityIndicatorReducer);
  return shouldShow ? (
    <View style={[styles.fullScreenActivityIndicator, colors.overlayColor]}>
    
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Indicator color={colors.primaryText} size='large' />
        </View>
    </View>
  ) : (
    false
  );
}

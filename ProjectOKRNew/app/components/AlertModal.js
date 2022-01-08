import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export default function AlertModal(props) {
  const {colors} = props.theme;

  return (
    <>
      <Modal
        animationType={'fade'}
        transparent={true}
        statusBarTranslucent={true}
        // supportedOrientations={['portrait', 'landscape']}
        visible={props.showModal}>
        <View
          style={[
            styles.modalContainer,
            {
              backgroundColor: colors.overlayColor,
            },
            props.modalStyle,
          ]}>
          <View
            style={[
              styles.containerStyle,
              {
                backgroundColor: colors.alertColor,
                shadowColor: colors.alertShadowColor,
              },
              props.containerStyle,
            ]}>
            {props.children}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerStyle: {
    marginHorizontal: 20,
  },
});


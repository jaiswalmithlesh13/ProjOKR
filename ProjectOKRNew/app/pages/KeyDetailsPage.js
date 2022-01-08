import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Fonts, FontSize, LineHeight, colors} from '../styles/StyleHub';
import {AlertModal} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {deviceWidth, deviceHeight} from '../utils/Scaling';

export default function KeyDetailsModal(props) {
  const {colors} = useTheme();
  const theme = useTheme();

  const keyDetails = (key, value) => {
    return (
      <View style={{flexDirection: 'row', marginVertical:10}}>
        <Text style={[styles.title, {color: colors.primaryText}]}>{key}</Text>
        <Text style={[styles.title, {color: colors.primaryText, flex:3}]}>{value}</Text>
      </View>
    );
  };

  return (
    <>
      <AlertModal showModal={props.showModal} theme={theme} title={'Modal'}>
        <View style={styles.contentWrapper}>
          <View style={[styles.alertView,{backgroundColor: colors.alertColor}]}>
            <View style={styles.closeContainer}>
              <TouchableOpacity onPress={props.onClose} activeOpacity={0.8}>
                <Icon name={'close'} size={FontSize.Large} color={colors.primaryText} />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, marginHorizontal:20}}>
              {keyDetails('Title : ', props?.selectedItem?.title)}
              {keyDetails('Id : ', props?.selectedItem?.id)}
              {keyDetails('Category : ', props?.selectedItem?.category)}
              {keyDetails('Metric Name : ', props?.selectedItem?.metric_name)}
              {keyDetails('Metric Start : ', props?.selectedItem?.metric_start)}
              {keyDetails('Metric Target : ', props?.selectedItem?.metric_target)}
            </View>
          </View>
        </View>
      </AlertModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertView: {
    backgroundColor: 'white',
    height: 400,
    width: deviceWidth - 40,
  },
  closeContainer: {
    height: 44,
    width: 44,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex:1,
    fontSize: FontSize.Mini,
    color: colors.darkGray,
    lineHeight: LineHeight.Mini,
  },
});

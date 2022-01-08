import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FontSize, LineHeight, colors} from '../styles/StyleHub';
import {deviceWidth, deviceHeight} from '../utils/Scaling';
import {AlertModal} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';

export default function FilterModal(props) {
  const {colors} = useTheme();
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filters = [
    'Company',
    'Sales',
    'Marketing',
    'Finance',
    'People',
    'Product Management',
    'Engineering',
    'Administration',
    'Customer Success',
    'Design',
  ];

  onClick = (item, index) => {
    props.onFilterSelected(item);
    setSelectedIndex(index);
  };

  return (
    <>
      <AlertModal showModal={props.showModal} theme={theme} title={'Modal'}>
        <View style={styles.contentWrapper}>
          <View
            style={[styles.alertView, {backgroundColor: colors.alertColor}]}>
            <View style={styles.closeContainer}>
              <TouchableOpacity onPress={props.onClose} activeOpacity={0.8}>
                <Icon name={'close'} size={FontSize.Large} color={colors.primaryText} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={filters}
              numColumns={1}
              scrollEnabled={true}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    style={[
                      styles.row,
                      styles.list,
                      {backgroundColor: colors.alertColor},
                    ]}
                    onPress={() => this.onClick(item, index)}>
                    <Text
                      style={[
                        styles.title,
                        {color: colors.primaryText},
                      ]}>
                      {item}
                    </Text>
                    {selectedIndex === index && (
                      <Icon
                        name={'check'}
                        size={FontSize.Large}
                        color={colors.primaryText}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={styles.separator} />
                </View>
              )}
            />

            <View style={{flex: 1, marginHorizontal: 20}}></View>
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
    height: deviceHeight - 200,
    width: deviceWidth - 40,
  },
  closeContainer: {
    height: 44,
    width: 44,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: FontSize.Mini,
    color: colors.darkGray,
    lineHeight: LineHeight.Mini,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightWhite,
  },
  parentHr: {
    height: 1,
    color: colors.white,
    width: '100%',
  },
  separator: {
    height: 0,
    backgroundColor: colors.grayTint,
    width: '100%',
  },
});

import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {colors as Colors, FontSize, LineHeight} from '../styles/StyleHub';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';

export default function Accordian(props) {
  const [data, setData] = useState(props.data);
  const [isExpanded, setIsExpanded] = useState(true);
  const {colors} = useTheme();

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    setData(props.data);
  }, [props]);

  const onClick = item => {
    props?.onClick(item);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const showSubList = list => {
    let fetchedItems = [];
    let a = 'a'
    if (list && list.length > 0) {
      list.map((item, index) => {
        fetchedItems.push(
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.childRow,
                styles.button,
                {backgroundColor: colors.background},
              ]}
              onPress={() => onClick(item)}>
              <Icon
                name={'user'}
                size={FontSize.XSmall}
                color={colors.iconColor}
                style={styles.userIconSubList}
              />
              <View style={{flex: 1, flexDirection:'row', marginTop:10}}>
              <Text style={[styles.subListTitle, {color: colors.primaryText}]}>{` ${String.fromCharCode(a.charCodeAt(0) + index)}.  `}</Text>
                <Text
                  style={[styles.subListTitle, {color: colors.primaryText}]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>,
        );
      });
      return fetchedItems;
    } else {
      return null;
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.row, {backgroundColor: colors.listView.background}]}
        onPress={() => toggleExpand()}>
        <Icon
          name={isExpanded ? 'caretup' : 'caretdown'}
          size={FontSize.Small}
          color={colors.primaryText}
          style={{marginTop: isExpanded ? 5 : 2}}
        />
        <Icon
          name={'user'}
          size={FontSize.Small}
          color={colors.iconColor}
          style={styles.userIcon}
        />
        <View style={styles.titleRow}>
          <Text style={[styles.title, {color: colors.primaryText}]}>{`${
            props.index + 1
          }. `}</Text>

          <Text
            style={[
              styles.title,
              {color: colors.primaryText},
            ]}>{`${data?.title}`}</Text>
        </View>
      </TouchableOpacity>
      {isExpanded && <View style={{}}>{showSubList(data.children)}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: FontSize.XSmall,
    fontWeight: 'bold',
    color: Colors.darkGray,
    lineHeight: LineHeight.XSmall,
  },
  subListTitle: {
    fontSize: FontSize.Mini,
    color: Colors.darkGray,
    lineHeight: LineHeight.Mini,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 68,
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 15,
    // alignItems: 'center',
    // alignContent: 'center',
    backgroundColor: Colors.lightWhite,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightWhite,
  },
  userIconSubList: {
    marginLeft: 35,
    marginRight: 15,
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
  },
  userIcon: {
    marginHorizontal: 15,
    marginTop: 1,
  },
});

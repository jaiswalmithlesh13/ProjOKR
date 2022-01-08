/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchContent} from '../container/redux/actions/fetch_action';
import {apiKeys} from '../container/redux/actions/helper/apiKeys';
import {useTheme} from '@react-navigation/native';
import {getOkrList} from '../container/redux/selectors';
import {useSelector} from 'react-redux';
import {Accordian} from '../components';
import {colors as Colors, FontSize, LineHeight} from '../styles/StyleHub';

import KeyDetailsModal from './KeyDetailsPage';
import FilterModal from './FilterPage';

export default function ObjectivePage({navigation}) {
  const {colors} = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [fetchedData, setFetchedData] = useState([]);
  const [showDetails, setShowDetails] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const {data} = useSelector(getOkrList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(apiKeys.objectives));
  }, []);

  useEffect(() => {
    parseOKRList(data);
  }, [data]);

  const getFilteredOKRList = (data, key) => {
    if (data) {
      const result = data.filter(item => {
        return item.category === key;
      });
      return result;
    }
    return [];
  };

  const parseOKRList = (data, filterKey) => {
    let objectivesData = {};

    if (data && data?.data) {
      data?.data?.map((dataItem, index) => {
        let objectiveId = dataItem.parent_objective_id;
        if (objectiveId === '') {
          objectivesData = {
            ...objectivesData,
            [dataItem.id]: {...dataItem, children: []},
          };
        } else {
          objectivesData?.[objectiveId]?.children.push(dataItem);
        }
      });

      var objectives = Object.values(objectivesData);
      let filteredData = filterKey
        ? getFilteredOKRList(objectives, filterKey)
        : objectives;
      setFetchedData(filteredData);
    }
  };

  const showDetailsModal = item => {
    setShowDetails(true);
    setSelectedItem(item);
  };

  const showFilterModal = () => {
    setShowFilter(true);
  };

  const showFetchedData = () => {
    let fetchedItems = [];
    if (fetchedData && fetchedData.length > 0) {
      fetchedData.map((fetchedItem, index) => {
        fetchedItems.push(
          <Accordian
            key={index}
            onClick={item => showDetailsModal(item)}
            index={index}
            data={fetchedItem}
          />,
        );
      });
      return fetchedItems;
    } else {
      return null;
    }
  };

  const onCloseShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const onCloseFilter = () => {
    setShowFilter(!showFilter);
  };

  const onPressFilter = () => {
    showFilterModal();
  };

  const onSelectFilter = key => {
    parseOKRList(data, key);
  };
  const onPressResetFilter = () => {
    parseOKRList(data);
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: colors.background}}>
        <View
          style={{
            backgroundColor: colors.background,
          }}>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              onPress={onPressResetFilter}
              style={styles.filterButton}
              activeOpacity={0.8}>
              <Text style={{color: colors.primaryText}}>{'Reset'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressFilter}
              style={styles.filterButton}
              activeOpacity={0.8}>
              <Text style={{color: colors.primaryText}}>{'Filter'}</Text>
            </TouchableOpacity>
          </View>
          {showFetchedData()}
        </View>
      </ScrollView>
      {showDetails && (
        <KeyDetailsModal
          selectedItem={selectedItem}
          showModal={showDetails}
          onClose={onCloseShowDetails}
        />
      )}
      {showFilter && (
        <FilterModal
          selectedItem={selectedItem}
          showModal={showFilter}
          onClose={onCloseFilter}
          onFilterSelected={onSelectFilter}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: FontSize.XLarge,
    fontWeight: '600',
    lineHeight: LineHeight.XLarge,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: FontSize.Medium,
    fontWeight: '400',
    lineHeight: LineHeight.Medium,
  },
  highlight: {
    fontWeight: '700',
  },
  filterContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filterButton: {
    marginHorizontal: 20,
  },
});

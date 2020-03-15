import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const Main = props => {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <Fragment>
      <GoalInput setCourseGoals={setCourseGoals} />
      {/* <ScrollView>
        {courseGoals.map(goal => (
          <View style={styles.listItem} key={goal.id}>
            <Text>{goal.goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      ></FlatList>
    </Fragment>
  );
};

Main.propTypes = {};

export default Main;

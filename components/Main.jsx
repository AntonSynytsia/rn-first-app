import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const Main = props => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addCourseGoal = (id, value) => {
    setCourseGoals(goals => [
      {
        id,
        value,
      },
      ...goals,
    ]);
  };

  const deleteCourseGoal = id => {
    setCourseGoals(goals => goals.filter(goal => goal.id !== id));
  };

  return (
    <Fragment>
      <GoalInput addCourseGoal={addCourseGoal} />
      {/* <ScrollView>
        {courseGoals.map(goal => (
          <View style={styles.listItem} key={goal.id}>
            <Text>{goal.goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id} // use 'id' as key
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem goal={itemData.item} deleteCourseGoal={deleteCourseGoal} />
        )}
      ></FlatList>
    </Fragment>
  );
};

Main.propTypes = {};

export default Main;

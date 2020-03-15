import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, deleteCourseGoal }) => {
  const deleteGoalHandler = () => {
    deleteCourseGoal(goal.id);
  };

  return (
    <TouchableOpacity onPress={deleteGoalHandler}>
      <View style={styles.listItem}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

GoalItem.propTypes = {};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;

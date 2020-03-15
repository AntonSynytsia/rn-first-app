import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

const GoalItem = ({ goal, deleteCourseGoal }) => {
  const deleteGoalHandler = () => {
    deleteCourseGoal(goal.id);
  };

  return (
    //<TouchableWithoutFeedback>
    //<TouchableNativeFeedback onPress={deleteGoalHandler}> // android only
    //<TouchableHighlight underlayColor={} onPress={deleteGoalHandler}>
    <TouchableOpacity activeOpacity={0.8} onPress={deleteGoalHandler}>
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

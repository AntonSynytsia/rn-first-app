import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

const generateId = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const GoalInput = ({ setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    const goal = enteredGoal.trim();
    setEnteredGoal('');
    const uuid = generateId(16);
    setCourseGoals(goals => [
      {
        id: uuid,
        value: goal,
      },
      ...goals,
    ]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      ></TextInput>
      <Button
        title="Add"
        onPress={addGoalHandler}
        disabled={enteredGoal.trim().length === 0}
      />
    </View>
  );
};

GoalInput.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 3,
    marginRight: 3,
    flex: 1,
  },
});

export default GoalInput;

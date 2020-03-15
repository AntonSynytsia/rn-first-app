import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
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

const GoalInput = ({ isAddMode, setIsAddMode, addCourseGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    const uuid = generateId(16);
    const goal = enteredGoal.trim();
    addCourseGoal(uuid, goal); // update the courseGoals state
    setEnteredGoal(''); // clear the text input
    setIsAddMode(false); // close modal when the add button is pressed
  }

  return (
    <Modal visible={isAddMode} animationType="slide">
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
    </Modal>
  );
};

GoalInput.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 6,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 3,
    marginBottom: 6,
  },
});

export default GoalInput;

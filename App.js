import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ErrorBoundary from './components/ErrorBoundary';
import Main from './components/Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 20,
  },
});

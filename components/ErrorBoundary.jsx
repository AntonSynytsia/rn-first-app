import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  handlePress() {
    this.setState({ error: null, errorInfo: null });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Fragment>
          <Text>Something went wrong.</Text>
          <Button title={Retry} onPress={handlePress} />
          <Text style={styles.error}>
            {this.state.error && this.state.error.toString()}
          </Text>
          <Text style={styles.error}>
            {this.state.errorInfo.componentStack}
          </Text>
        </Fragment>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  error: {},
});

export default ErrorBoundary;

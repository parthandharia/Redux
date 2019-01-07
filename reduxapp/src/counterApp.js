import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
  //   increaseCounter = () => {
  //     this.setState({ counter: this.state.counter + 1 });
  //   };
  //   decreaseCounter = () => {
  //     this.setState({ counter: this.state.counter - 1 });
  //   };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 200
          }}
        >
          <TouchableOpacity onPress={this.props.increaseCounter}>
            <Text style={{ fontSize: 20 }}> increase </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={this.props.decreaseCounter}>
            <Text style={{ fontSize: 20 }}> decrease </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(
  mapStoreToProps,
  mapDispachToProps
)(CounterApp);
function mapStoreToProps(state) {
  return {
    counter: state.counter
  };
}
function mapDispachToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { AppLoading } from "expo";
const { height, width } = Dimensions.get("window");
// import { Icon } from "native-base";
// import { Provider } from "react-redux";
// import RoutineHead from "./components/RoutineHead.js";
// import RoutineBody from "./components/RoutineBody.js";
import Loading from "./components/Loading";
import Routine from "./components/Routine";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";

// import { createStore } from "redux";
// import allReducers from "./reducers";
// const store = createStore(allReducers);

export default class App extends React.Component {
  state = {
    loaded: true
  };
  componentDidMount = () => {
    this.setState({ loaded: false });
  };

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <Routine /> */}
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

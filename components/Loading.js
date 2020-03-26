import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ImageBackground
} from "react-native";

export default class Loading extends React.Component {
  render() {
    return (
      // <ImageBackground
      //   source={require("../assets/splash.png")}
      //   style={styles.back}
      // >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#343a40" />
        <Text style={styles.text}>Now Loading</Text>
      </View>
      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: "100%",
    height: "100%"
    // flexDirection: "row",
    // alignItems: "row",
    // justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  text: {
    marginTop: 24,
    fontSize: 24,
    color: "#343a40",
    textAlign: "center"
  }
});

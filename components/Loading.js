import * as React from "./node_modules/react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Now Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  logo: {
    height: 128,
    width: 128
  }
});

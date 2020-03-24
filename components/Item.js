import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Item() {
  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>WorkoutName</Text>
      <Text style={styles.button}>Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    color: "#343a40"
  },
  workoutName: {
    fontSize: 24
  },
  button: {
    width: 20,
    height: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#ccc"
  }
});

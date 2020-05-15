import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function Set({ set }) {
  const [state, setState] = useState(set.reps);
  const onIncrement = () => {
    setState(state + 1);
  // console.log(set);
  const [reps, setReps] = useState(0);
  const onIncrement = () => {
    setReps(reps + 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonText}>{state}</Text>
        <Text style={styles.buttonText}>{reps}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    color: "#343a40",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: 60,
    height: 60,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

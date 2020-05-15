import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Set from "./Set";
// import Data from "../constants/Data";

export default function Item() {
  //console.log(Data[0].workoutList[0].setList);

  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>
        {Data[0].workoutList[0].name}
        <MaterialIcons name="delete" size={20} color={"#343a40"} />
      </Text>
      <View>
        {Object.values(item.setList).map((set, index) => {
          return (
            <Text style={styles.workoutDesc} key={index.toString()}>
              {set.set}set&nbsp;{set.weight}kg&nbsp;{set.reps}reps
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    color: "#343a40",
  },
  workoutName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40",
  },
  workoutDesc: {
    fontSize: 18,
    fontWeight: "bold",
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
  //setList
  addSet: {},
  setList: {
    flexDirection: "row",
  },
  button: {
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

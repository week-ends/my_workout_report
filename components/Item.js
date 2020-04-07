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
import Data from "../constants/Data";

export default function Item() {
  //console.log(Data[0].workoutList[0].setList);

  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>
        {Data[0].workoutList[0].name}
        <MaterialIcons name="delete" size={20} color={"#343a40"} />
      </Text>
      <FlatList
        data={Data[0].workoutList[0].setList}
        renderItem={({ item }) => (
          <Text style={styles.workoutDesc}>
            {item.set}set{item.weight}kg{item.reps}reps
          </Text>
        )}
        keyExtractor={(item, index) => item.set.toString()}
      />
      <View style={styles.setList}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.setList}
          data={Data[0].workoutList[0].setList}
          renderItem={({ item }) => <Set set={item} />}
          keyExtractor={(item, index) => item.set.toString()}
        />
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

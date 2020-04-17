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

export default function Item({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>
        {item.name}
        <MaterialIcons name="delete" size={20} color={"#343a40"} />
      </Text>
      <View>
        {item.setList.map((set, index) => {
          return (
            <Text style={styles.workoutDesc} key={index.toString()}>
              {set.set}set{set.weight}kg{set.reps}reps
            </Text>
          );
        })}
      </View>
      {/* <FlatList
        data={Data[0].workoutList[0].setList}
        renderItem={({ item }) => (
          <Text style={styles.workoutDesc}>
            {item.set}set{item.weight}kg{item.reps}reps
          </Text>
        )}
        keyExtractor={(item, index) => item.set.toString()}
      /> */}
      <View style={styles.setList}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        {item.setList.map((set, index) => {
          return <Set key={index} set={set} />;
        })}
        {/* <FlatList
          style={styles.setList}
          data={Data[0].workoutList[0].setList}
          renderItem={({ item }) => <Set item={item.reps} />}
          keyExtractor={(item, index) => item.set.toString()}
        /> */}
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

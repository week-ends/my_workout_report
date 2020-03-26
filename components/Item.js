import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Set from "./Set";

export default function Item({ item }) {
  // console.log(item.setList);
  return (
    <View style={styles.container}>
      <Text style={styles.workoutName}>
        {item.name}
        <MaterialIcons name="delete" size={20} color={"#343a40"} />
      </Text>
      <FlatList
        // style={styles.setListText}
        data={item.setList}
        renderItem={set => (
          <Text style={styles.workoutDesc}>
            {set.item.set}set&nbsp;
            {set.item.weight}kg&nbsp;
            {set.item.reps}reps
          </Text>
        )}
      />
      <View style={styles.setList}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.setList}
          data={item.setList}
          renderItem={({ set }) => <Set set={set} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    color: "#343a40"
  },
  workoutName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40"
  },
  workoutDesc: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40"
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
    backgroundColor: "#ccc"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  //setList
  addSet: {},
  setList: {
    flexDirection: "row"
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
    backgroundColor: "#ccc"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  }
});

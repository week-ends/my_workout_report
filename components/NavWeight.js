import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

export default function NavWeight() {
  //   const onChangeNumber = e => {
  //     e.target.value
  //       ? onSetNumber(parseFloat(e.target.value, 10))
  //       : (e.target.value = 0);
  //   };

  //   const onChangeDiff = e => {
  //     e.target.value
  //       ? onSetDiff(parseFloat(e.target.value, 10))
  //       : (e.target.value = diff);
  //   };
  //   const selfSelect = e => {
  //     e.target.select();
  //   };
  return (
    <View style={styles.container}>
      <Text>11111</Text>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder={"Set your the smallest weight"}
          placeholderTextColor={"#757575"}
          returnKeyType={"done"}
          autoCorrect={false}
          //   onChangeText={text => onChangeText(text)}
          //   min="1.25"
          //   onChange={onChangeDiff}
          //   onClick={selfSelect}
        />
        <Text style={styles.unit}>kg</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>👆⬆</Text>
      </TouchableOpacity>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder={"Input your Weight"}
          placeholderTextColor={"#757575"}
          returnKeyType={"done"}
          autoCorrect={false}
          //   onChangeText={text => onChangeText(text)}
          //   min="1"
          //   onChange={onChangeNumber}
          //   onClick={selfSelect}
        />
        <Text style={styles.unit}>kg</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>👇⬇</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: width,
    // backgroundColor: "#ffffff"
    backgroundColor: "#fc0"
  },
  workoutName: {
    fontSize: 24
  },
  inputBlock: {
    flex: 1,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    fontSize: 24
  },
  unit: {
    flex: 1,
    fontSize: 16
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    fontSize: 24,
    fontWeight: "bold",

    backgroundColor: "#343a40"
  }
});

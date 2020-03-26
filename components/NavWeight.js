import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

export default function NavWeight() {
  const [diff, setDiff] = useState(1.25);
  const [weight, setWeight] = useState(0);

  const onSetDiff = val => {
    setDiff(val);
  };
  const onSetWeight = val => {
    setWeight(val);
  };
  const onChangeDiff = e => {
    console.log(e);
    e.target.value
      ? onSetDiff(parseFloat(e.target.value, 10))
      : (e.target.value = diff);
  };
  const onChangeWeight = e => {
    e.target.value
      ? onSetWeight(parseFloat(e.target.value, 10))
      : (e.target.value = 0);
  };
  const onIncreaseWeight = () => {
    console.log(weight);
    setWeight(weight + diff);
  };
  const onDecreaseWeight = () => {
    console.log(weight);
    setWeight(weight - diff);
  };

  //   const selfSelect = e => {
  //     e.target.select();
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder={"Set your the smallest weight"}
          placeholderTextColor={"#757575"}
          returnKeyType={"done"}
          autoCorrect={false}
          // value={diff}
          // onChangeDiff={onChangeDiff}
          //   min="1.25"
          //   onChange={onChangeDiff}
          //   onClick={selfSelect}
        />
        <Text style={styles.unit}>kg</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onIncreaseWeight}>
        <MaterialIcons name="arrow-upward" size={50} color={"white"} />
      </TouchableOpacity>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          keyboardType={"numeric"}
          placeholder={"Input your Weight"}
          placeholderTextColor={"#757575"}
          returnKeyType={"done"}
          autoCorrect={false}
          // value={weight}
          // onChangeWeight={number => onChangeWeight(number)}
          //   onChangeText={text => onChangeText(text)}
          //   min="1"
          //   onChange={onChangeNumber}
          //   onClick={selfSelect}
        />
        <Text style={styles.unit}>kg</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        // onDecreaseWeight={onDecreaseWeight}
      >
        <MaterialIcons name="arrow-downward" size={50} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 100,
    flexDirection: "row",
    // backgroundColor: "#ffffff"
    backgroundColor: "#fc0"
  },
  inputBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    fontSize: 24
  },
  unit: {
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

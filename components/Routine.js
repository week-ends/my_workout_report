import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import Item from "./Item";
import NavWeight from "./NavWeight";
import Card from "./Card";
import Data from "../constants/Data";
import { MaterialIcons } from "@expo/vector-icons";
// import { Icon } from "native-base";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import allReducers from "./reducers";
// import RoutineHead from "./components/RoutineHead.js";
// import RoutineBody from "./components/RoutineBody.js";
const { height, width } = Dimensions.get("window");

// const store = createStore(allReducers);

export default function Routine() {
  const [newWorkoutItem, setNewWorkoutItem] = useState("");
  const [routineList, setRoutineList] = useState(Data);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const onChangeItem = (text) => {
    setNewWorkoutItem(text);
  };
  const onAddItem = () => {
    newWorkoutItem.length === 0
      ? Alert.alert("Please input your workout")
      : //addActions
        null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.routineBlock}>
        <View style={styles.routineHead}>
          <Text style={styles.dayString}>
            {dateString}
            <Text style={styles.dayName}>{dayName}</Text>
          </Text>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.input}
              placeholder={"Input Your Item"}
              value={newWorkoutItem}
              onChangeText={onChangeItem}
              placeholderTextColor={"#757575"}
              returnKeyType={"done"}
              autoCorrect={false}
              // onSubmitEditing={this._addToDo}
            />
            <TouchableOpacity onPress={onAddItem}>
              <MaterialIcons name="add-circle" size={30} color={"#12b886"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.routineBody}>
          <Item />
          {/* <FlatList
            style={styles.workoutItemList}
            data={routineList[0].workoutList}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => item.code.toString()}
          /> */}
        </View>
      </View>

      <NavWeight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  routineBlock: {
    flex: 1,
  },
  //Routine Head
  routineHead: {
    width: width,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 32,
    paddingRight: 32,
    borderBottomColor: "#e9ecef",
    borderBottomWidth: 1,
  },
  inputBlock: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 2,
    paddingLeft: 2,

    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 4,

    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 35,

    fontSize: 24,
    color: "#343a40",
    fontWeight: "bold",
  },
  dayString: {
    margin: 0,
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40",
  },
  dayName: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#868e96",
  },
  //Routine Body
  routineBody: {
    flex: 1,
    width: width,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 32,
  },
  workoutItemList: {
    // alignItems: "center"
  },
  workoutName: {
    fontSize: 24,
  },
  workoutSet: {
    fontSize: 24,
  },
});

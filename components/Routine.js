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
  FlatList
} from "react-native";
import Item from "./Item";
import NavWeight from "./NavWeight";
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
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const [newWorkoutItem, setNewWorkoutItem] = useState("");
  const [routineList, setRoutineList] = useState([
    {
      key: "1",
      createdAt: dateString,
      dayName: dayName,
      workoutList: [
        {
          code: "squat",
          name: "Squat",
          setList: [
            { set: 1, weight: 20, reps: 20 },
            { set: 2, weight: 40, reps: 6 },
            { set: 3, weight: 60, reps: 2 },
            { set: 4, weight: 75, reps: 5 },
            { set: 5, weight: 80, reps: 5 },
            { set: 6, weight: 85, reps: 5 },
            { set: 7, weight: 85, reps: 5 }
          ]
        },
        {
          code: "benchpress",
          name: "BenchPress",
          setList: [
            { set: 1, weight: 0, reps: 0 },
            { set: 2, weight: 0, reps: 0 }
          ]
        },
        {
          code: "deadlift",
          name: "Deadlift",
          setList: [
            { set: 1, weight: 0, reps: 0 },
            { set: 2, weight: 0, reps: 0 }
          ]
        }
      ]
    }
  ]);

  const onChangeItem = text => {
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
      <View style={styles.card}>
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
          {/* <ScrollView contentContainerStyle={styles.workoutItemList}> */}
          <FlatList
            style={styles.workoutItemList}
            data={routineList[0].workoutList}
            renderItem={({ item }) => <Item item={item} />}
          />

          {/* <Item state={routineList} /> */}
          {/* </ScrollView> */}
        </View>
      </View>

      <NavWeight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e9ecef",
    backgroundColor: "#343a40",
    alignItems: "center"
  },
  card: {
    // flexDirection: column,

    width: width - 25,
    maxWidth: 1025,
    height: 600,
    minHeight: 450,

    // marginLeft: auto,
    // marginRight: auto,
    marginTop: 96,
    marginBottom: 150,

    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.05,
        shadowRadius: 5,
        shadowOffset: {
          height: 8,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  //Routine Head
  routineHead: {
    padding: 32,
    borderBottomColor: "#e9ecef",
    borderBottomWidth: 1
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
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 35,

    fontSize: 24,
    color: "#343a40",
    fontWeight: "bold"
  },
  dayString: {
    margin: 0,
    fontSize: 24,
    fontWeight: "bold",
    color: "#343a40"
  },
  dayName: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#868e96"
  },
  //Routine Body
  routineBody: {
    flex: 1,
    padding: 32
  },
  workoutItemList: {
    // alignItems: "center"
  },
  workoutName: {
    fontSize: 24
  },
  workoutSet: {
    fontSize: 24
  }
});

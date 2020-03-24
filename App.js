import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  AsyncStorage
} from "react-native";
import { AppLoading } from "expo";
const { height, width } = Dimensions.get("window");
// import { Icon } from "native-base";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import allReducers from "./reducers";
// import RoutineHead from "./components/RoutineHead.js";
// import RoutineBody from "./components/RoutineBody.js";
import Item from "./components/Item";
import { Icon } from "native-base"; // 추가된 코드

// const store = createStore(allReducers);

export default function App() {
  const [newWorkoutItem, setNewWorkoutItem] = useState("");
  const [state, setState] = useState({
    items: { a: 0, b: 0 }
  });

  // componentDidMount = ()=>{
  //   this._loadToDos();
  // }
  // const { newToDo, loadedToDos,toDos } = this.state;
  // if(!loadedToDos){
  //     return <AppLoading/>
  // }

  const onChangeItem = text => {
    setNewWorkoutItem(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.routineHead}>
          <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
          <Text style={styles.dayString}>
            2020년 3월 24일
            <Text style={styles.dayName}>화요일</Text>
          </Text>
          <View style={styles.inputBlock}>
            <TextInput
              style={styles.input}
              placeholder={"Input Your Item"}
              value={newWorkoutItem}
              onChangeText={onChangeItem}
              placeholderTextColor={"#343a40"}
              returnKeyType={"done"}
              autoCorrect={false}
              // onSubmitEditing={this._addToDo}
            />
          </View>
        </View>
        <View style={styles.routineBody}>
          <ScrollView contentContainerStyle={styles.workoutItemList}>
            {Object.values(state.items).map(item => (
              <Item
                key={item.id}
                // deleteToDo={this._deleteItem}
                // uncompleteToDo={this._uncompleteItem}
                // completeToDo={this._completeItem}
                // updateToDo={this._updateItem}
                // {...Item}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    alignItems: "center"
  },
  card: {
    // flexDirection: column,

    flex: 1,
    width: width - 25,
    maxWidth: 1025,
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
    borderRadius: 4
  },
  input: {
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

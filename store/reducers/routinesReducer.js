import * as type from "../actions/types";

const updateObject = (state, updateState) => {
  return { ...state, ...updateState };
};

// 액션 초기함수 정의
const initialState = {
  routine: {
    id: Date.now().toString(),
    title: "title",
    createdAt: new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    dayName: new Date().toLocaleDateString("ko-KR", { weekday: "long" }),
    desc: "Description",
    workoutItems: {
      // squat: {
      //   name: "squat",
      //   sets: {
      //     1: {
      //       set: 1,
      //       reps: 0,
      //       weight: 0
      //     },
      //     2: {
      //       set: 2,
      //       reps: 0,
      //       weight: 0
      //     }
      //   }
      // },
      // benchpress: {
      //   name: "benchpress",
      //   sets: {
      //     1: {
      //       set: 1,
      //       reps: 0,
      //       weight: 0
      //     }
      //     2: {
      //       set: 2,
      //       reps: 0,
      //       weight: 0
      //     }
      //   }
      // }
    },
  },
};

const addWorkout = (state, text) => {
  const routine = {
    ...state.routine,
    workoutItems: {
      ...state.routine.workoutItems,
      [text]: {
        name: text,
        sets: {
          1: {
            set: 1,
            reps: 0,
            weight: 0,
          },
        },
      },
    },
  };

  return updateObject(state, { routine });
};

const removeWorkout = (state, text) => {
  const matchedWorkoutItems = Object.keys(state.routine.workoutItems)
    .filter((key) => key !== text)
    .reduce((obj, key) => {
      obj[key] = state.routine.workoutItems[key];
      return obj;
    }, {});
  console.log("REMOVE_WORKOUT");
  console.log("\trest items:", matchedWorkoutItems);

  const routine = {
    ...state.routine,
    workoutItems: {
      ...matchedWorkoutItems,
    },
  };

  return updateObject(state, { routine });
};

const addSet = (state, { action: { text, nextSet } }) => {
  console.log("ADD_SET", text, nextSet);
  const routine = {
    ...state.routine,
    workoutItems: {
      ...state.routine.workoutItems,
      [text]: {
        ...state.routine.workoutItems[text],
        sets: {
          ...state.routine.workoutItems[text].sets,
          [nextSet]: {
            set: nextSet,
            reps: 0,
            weight: 0,
          },
          // ...action.newSet
        },
      },
    },
  };
  return updateObject(state, { routine });
};

const addReps = (state, action) => {
  const { text, setIndex, reps, weight } = action;
  console.log(
    "ADD_REPS",
    action.text,
    action.setIndex,
    action.reps,
    action.weight
  );
  const routine = {
    ...state.routine,
    workoutItems: {
      ...state.routine.workoutItems,
      [text]: {
        ...state.routine.workoutItems[text],
        sets: {
          ...state.routine.workoutItems[text].sets,
          [setIndex]: {
            set: setIndex,
            reps: reps,
            weight: weight,
          },
          // ...action.newSet
        },
      },
    },
  };

  return updateObject(state, { routine });
};

// 리듀서 작성
export default (state = initialState, action) => {
  /* prettier-ignore */
  switch (action.type) {
    case type.ADD_WORKOUT: return addWorkout(state, action.text);
    case type.REMOVE_WORKOUT: return removeWorkout(state, action);
    case type.ADD_SET: return addSet(state, action);
    case type.ADD_REPS: return addReps(state, action);
    default: return state;
  }
};

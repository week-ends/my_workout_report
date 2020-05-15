import * as type from "./types";
//액션 정의
export const addWorkout = (text) => {
  return {
    type: type.ADD_WORKOUT,
    text,
  };
};

export const removeWorkout = (text) => {
  return {
    type: type.REMOVE_WORKOUT,
    text,
  };
};

//각 운동마다 추가되지 않고 전체에서 추가 됨
//let nextSet = 1;
export const addSet = (text, nextSet) => {
  return {
    type: type.ADD_SET,
    text,
    nextSet,
  };
};

export const addReps = (text, setIndex, reps, weight) => {
  return {
    type: type.ADD_REPS,
    text,
    setIndex,
    reps,
    weight,
  };
};

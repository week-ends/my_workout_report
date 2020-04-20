const ADD_SET = "sets/ADD_SET";

export const onAddSet = () => ({
  type: ADD_SET,
  set: {
    reps: 0,
    weight: 0
  }
});

const initialState = [];

export default function sets(state = initialState, action) {
  switch (action.type) {
    case ADD_SET:
      console.log("ADD_SET");
      return state.concat(action.set);
    default:
      return state;
  }
}

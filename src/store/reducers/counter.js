import * as type from 'store/actions/types';

const updateObject = (state, updateState) => {
  return { ...state, ...updateState };
};

const iniitialState = {
  number: 0,
  diff: 1.25,
  unit: 'kg'
};

const setNumber = (state, number) => {
  return updateObject(state, number);
};
const setDiff = (state, diff) => {
  return updateObject(state, diff);
};
const increase = state => {
  return updateObject(state, { number: state.number + state.diff });
};
const decrease = state => {
  return updateObject(state, { number: state.number - state.diff });
};

export const reducer = (state = iniitialState, action) => {
  /* prettier-ignore */
  switch (action.type) {
    case type.SET_NUMBER: return setNumber(state, action.number);
    case type.SET_DIFF: return setDiff(state, action.diff);
    case type.INCREASE: return increase(state)
    case type.DECREASE: return decrease(state)
    default: return state;
  }
};

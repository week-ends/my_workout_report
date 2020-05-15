import * as type from './types';

export const setNumber = number => {
  return { type: type.SET_NUMBER, number };
};
export const setDiff = diff => {
  return { type: type.SET_DIFF, diff };
};
export const increase = () => {
  return { type: type.INCREASE };
};
export const decrease = () => {
  return { type: type.DECREASE };
};

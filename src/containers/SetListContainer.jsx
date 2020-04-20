import React from 'react';
import SetList from '../components/SetList';

function SetContainer({ sets, workoutItem }) {
  // console.log(sets);
  return <SetList sets={sets} workoutItem={workoutItem} />;
}

export default SetContainer;

import React from 'react';
import Set from './Set';

function SetList({ workoutItem }) {
  const sets = workoutItem.sets;
  const workoutItemName = workoutItem.name;
  return (
    <>
      {Object.values(sets).map((set, index) => (
        <Set key={index} index={index} set={set} workoutItemName={workoutItemName} />
      ))}
    </>
  );
}

export default SetList;

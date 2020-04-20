import React, { useState } from 'react';
import './WorkoutItem.scss';
import { useDispatch } from 'react-redux';
import { MdAdd, MdDelete } from 'react-icons/md';
import SetListContainer from '../containers/SetListContainer';
import * as action from 'store/actions';

function SetDesc({ set }) {
  return (
    <li>
      <span>{set.set}</span>set
      <span>{set.weight}</span>kg
      <span>{set.reps}</span>reps
    </li>
  );
}

function WorkoutItem({ workoutItem }) {
  const [nextSet, setNextSet] = useState(2);
  const workoutItemName = workoutItem.name;
  const sets = workoutItem.sets;

  //모듈로 액션 보내기
  const dispatch = useDispatch();

  const onRemoveWorkout = workoutItemNameText =>
    dispatch(action.removeWorkout(workoutItemNameText));
  const onAddSet = (workoutItemNameText, nextSet) =>
    dispatch(action.addSet(workoutItemNameText, nextSet));

  const clickRemoveWorkout = () => {
    // console.log(workoutItemName.toString());
    //workoutItems의 운동항목 동적으로 바꿀 것
    onRemoveWorkout(workoutItemName.toString().replace(/(\s*)/g, ''));
  };
  const clickAddSet = () => {
    // console.log(workoutItemName.toString());
    //workoutItems의 운동항목 동적으로 바꿀 것
    setNextSet(nextSet + 1);
    // console.log(workoutItem);
    onAddSet(workoutItemName.toString().replace(/(\s*)/g, ''), nextSet);
    // console.log(workoutItemName.toString());
    // console.log(nextSet);
  };

  return (
    <>
      <li className="WorkoutItem">
        <div className="WorkoutItemHead">
          <span className="name">
            <b>{workoutItemName}</b>
          </span>
          <span
            role="img"
            aria-label="Delete WorkoutItem"
            className="Button-del"
            onClick={clickRemoveWorkout}
          >
            <MdDelete />
          </span>
          <ul className="sets">
            {Object.values(sets).map((set, index) => (
              <SetDesc key={index} set={set} />
            ))}
          </ul>
        </div>
        <div className="WorkoutItemButtonsBlock">
          <div className="Buttons">
            <SetListContainer sets={sets} workoutItem={workoutItem} />
          </div>
          <div className="addButton" onClick={clickAddSet}>
            <MdAdd />
          </div>
        </div>
      </li>
    </>
  );
}

export default React.memo(WorkoutItem);

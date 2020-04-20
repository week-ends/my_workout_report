import React from 'react';
import RoutineHead from '../components/RoutineHead';
import RoutineBody from '../components/RoutineBody';
import { useSelector } from 'react-redux';

function RoutineContainer() {
  //■■■■■■루틴이 한 개 인 상황
  const routine = useSelector(state => state.routines.routine);
  // const state = useSelector(state => state);

  // console.log(state);
  // console.log(routine);
  return (
    <div>
      <RoutineHead routine={routine} />
      <RoutineBody routine={routine} />
    </div>
  );
}

export default RoutineContainer;

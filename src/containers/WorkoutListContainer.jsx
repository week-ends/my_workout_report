import React from "react";
import { useSelector } from "react-redux";
import WorkoutList from "../components/WorkoutList";

function WorkoutListContainer({}) {
  //workout들
  const workoutItems = useSelector(
    state => state.routines.routine.workoutItems
  );
  return <WorkoutList workoutItems={workoutItems} />;
}

export default WorkoutListContainer;

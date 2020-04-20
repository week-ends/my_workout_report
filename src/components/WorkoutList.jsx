import React from "react";
import WorkoutItem from "./WorkoutItem";
import styled from "styled-components";
function WorkoutList({ workoutItems }) {
  return (
    <Ul>
      {Object.values(workoutItems).length > 0 ? (
        Object.values(workoutItems).map((workoutItem, index) => (
          <WorkoutItem key={index} workoutItem={workoutItem} />
        ))
      ) : (
        <Text>
          <span
            role="img"
            aria-label="emoji-workout-men"
            style={{ fontSize: "2rem" }}
          >
            🏋️
          </span>
          <br />
          Start reporting
          <br />
          by adding your workout.
        </Text>
      )}
    </Ul>
  );
}
const Text = styled.div`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: #868e96;
  font-weight: bold;
  text-align: center;
`;

const Ul = styled.ul`
  padding: 0;
`;

export default WorkoutList;

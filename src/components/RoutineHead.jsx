import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import CreateWorkoutItem from "./CreateWorkoutItem";
import { MdEdit, MdDone } from "react-icons/md";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};

function RoutineHead({ routine }) {
  const [inputs, setInputs] = useState({
    title: routine.title,
    desc: routine.desc
  });
  const { title, desc } = inputs;
  const [readonly, setReadOnly] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { y } = useScroll();

  const onChange = e => {
    const { title, desc } = e.target;
    console.log(e.target);
    setInputs({ ...inputs, [title]: title, [desc]: desc });
  };
  const EditTitle = () => {
    setReadOnly(!readonly);
  };
  const test = e => {
    console.log(e.target);
  };
  return (
    <RoutineHeadBlock>
      {/* <RoutineHeadLine>
        <Input
          type="text"
          value={title}
          onChange={onChange}
          onMouseOver={test}
          readOnly={readonly}
        />
        {readonly ? (
          <MdEdit onClick={EditTitle} />
        ) : (
          <MdDone onClick={setReadOnly} />
        )}
      </RoutineHeadLine>
      <RoutineHeadLine>
        <Input
          type="text"
          value={desc}
          onChange={onChange}
          readOnly={readonly}
        />
        {readonly ? (
          <MdEdit onClick={EditTitle} />
        ) : (
          <MdDone onClick={setReadOnly} />
        )}
      </RoutineHeadLine> */}
      <h2>
        {routine.createdAt}
        <span className="day">{routine.dayName}</span>
      </h2>
      <CreateWorkoutItemBlock style={{ position: y > 92 ? "fixed" : "static" }}>
        <CreateWorkoutItem onCreate={routine} />
      </CreateWorkoutItemBlock>
    </RoutineHeadBlock>
  );
}
const RoutineHeadLine = styled.h2`
  display: flex;
  align-items: center;
`;
const CreateWorkoutItemBlock = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  background: #fff;
  max-width: 512px;
`;
const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  color: #343a40;
  font-weight: bold;
`;
const RoutineHeadBlock = styled.div`
  padding-top: 48px;
  h2 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
    padding-left: 32px;
    padding-right: 32px;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Modify = styled.span`
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 1px solid #343a40;
  }
  svg {
    width: 18px;
    height: 100%;
    fill: #343a40;
  }
  ${props =>
    props.open &&
    css`
      border-bottom: 1px solid #343a40;
      &:hover {
        border-bottom: 1px solid #343a40;
      }
      &:active {
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        opacity: 0.8;
      }
    `}
`;

export default RoutineHead;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import * as action from 'store/actions';

function CreateWorkoutItem({ id }) {
  const [text, setText] = useState('');

  //모듈로 액션 보내기
  const dispatch = useDispatch();

  const onAddWorkout = text => dispatch(action.addWorkout(text));

  //로컬 함수
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onAddWorkout(text);
    setText(''); // 인풋 초기화
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        id={id}
        value={text}
        placeholder="Input your Item"
        onChange={onChange}
        required
        autoFocus
      />
      <Button type="submit">
        <MdAdd size="100%" />
      </Button>
    </Form>
  );
}
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
  padding-top: 2px;

  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 90%;
  height: 35px;
  font-size: 1.3rem;
  color: #343a40;
  font-weight: bold;
  border: none;
  box-sizing: border-box;
  ::placeholder {
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  width: 10%;
  height: 100%;
  padding: 0;
  display: flex;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  color: white;

  transition: 0.125s all ease-in;
  background: #38d9a9;
  &:hover {
    transform: scale(1.1);
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
`;

export default CreateWorkoutItem;

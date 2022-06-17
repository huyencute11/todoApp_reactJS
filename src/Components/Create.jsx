import { useRef } from "react";
import styled from "styled-components";

import { useStore, actions } from "../store";

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  font-size: 17px;
  padding: 0 10px;
  width: 70%;
  height: 40px;
  border-radius: 4px;
  border: beige;
  font-family: cursive;
  &:focus-visible {
    outline-offset: 0px;
    outline: 2px solid #19bae875;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  cursor: pointer;
  background-color: #2899cc;
  font-size: 14px;
  line-height: 100%;
  border: 1px #ccc;
  text-transform: uppercase;
  border-radius: 5px;
  color: #fff4e5;
  margin-left: 2px;
  font-family: cursive;
  &:hover {
    opacity: 0.8;
  }
`;
const Create = () => {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const txtRef = useRef();
  const handleAdd = () => {
    if (todoInput.trim().length > 0) {
      dispatch(actions.addTodoInput(todoInput));
      txtRef.current.focus();
      dispatch(actions.setTodoInput(""));
    } else {
      txtRef.current.focus();
      dispatch(actions.setTodoInput(""));
    }
  };
  return (
    <Container>
      <Input
        ref={txtRef}
        value={todoInput}
        placeholder="What needs to be done ?"
        onKeyUp={(event) => {
          event.keyCode === 13 && todoInput && handleAdd();
        }}
        onChange={(e) => {
          e.preventDefault();
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        Add to task
      </Button>
    </Container>
  );
};

export default Create;

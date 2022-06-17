import { useRef } from "react";
import styled, { css } from "styled-components";

import { useStore, actions } from "../store";

const Container = styled.li`
  display: flex;
  margin: 0 6px;
  ${"" /* justify-content: space-between; */}
  align-items: center;
  align-content: center;
  margin: 10px 0;
`;
const Content = styled.div`
  ${(props) =>
    props.check &&
    css`
      width: 10%;
    `};
  ${(props) =>
    props.todo &&
    css`
      width: 60%;
    `};
  ${(props) =>
    props.button &&
    css`
      display: flex;
      width: 30%;
      justify-content: center;
      @media (max-width: 768px) {
        justify-content: end;
      }
    `};
`;
const Button = styled.button`
  font-size: 16px;
  padding: 10px 8px;
  border-radius: 10px;
  border: 0;
  font-family: cursive;
  color: red;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const Todo = styled.p`
  font-size: 22px;
  margin: 0;
  /* margin-bottom: 5px; */
  font-family: cursive;
  color: blanchedalmond;
  line-height: 40px;
  ${(props) =>
    props.completed &&
    css`
      text-decoration-line: line-through;
    `};
`;
const Check = styled.input`
  transform: scale(2);
  padding: 10px;
`;
const TodoItem = ({ todo, index }) => {
  // console.log(todo);
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleDelete = (i) => {
    dispatch(actions.deleteTodoInput(i));
  };
  const handleCompleted = (i) => {
    dispatch(actions.toggleComplete(i));
  };
  const [first, ...rest] = todo.title;
  return (
    <Container>
      <Content check>
        <Check
          id={index}
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            // e.preventDefault();
            handleCompleted(index);
          }}
        ></Check>
      </Content>
      <Content todo>
        <Todo completed={todo.completed}>
          {first.toUpperCase() + rest.join("")}
        </Todo>
      </Content>

      <Content button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(index);
          }}
        >
          Delete
        </Button>
      </Content>
    </Container>
  );
};

export default TodoItem;

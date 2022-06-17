import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useStore } from "../store";

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const ListItem = styled.ul`
  width: 80%;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TodoList = () => {
  const [state] = useStore();
  const { todos, filters, filter } = state;
  return (
    <Container>
      <ListItem>
        {todos.filter(filters[filter]).map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} />
        ))}
      </ListItem>
    </Container>
  );
};

export default TodoList;

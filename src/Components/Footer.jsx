import React from "react";
import styled, { css } from "styled-components";
import { useStore, actions } from "../store";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: cursive;
  height: 80px;
  color: #ffffff;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;
const TodoCount = styled.span`
  font-size: 16px;
  line-height: 30px;
  font-family: cursive;
`;
const TodoFilter = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const Filter = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 4px;
  padding: 0;
  min-width: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.select &&
    css`
      box-shadow: 1px 1px 2px;
    `};
`;

const Clear = styled.span`
  font-size: 16px;
  line-height: 30px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Footer = () => {
  const [state, dispatch] = useStore();
  const { todos, todoInput, filters, filter } = state;
  const handleChangeFilter = (type) => {
    dispatch(actions.changeFilter(type));
  };
  const handleClearCompleted = () => {
    dispatch(actions.clearCompleted());
  };
  return (
    <Container>
      <Content>
        <TodoCount>{todos.filter(filters.active).length} Item left </TodoCount>
      </Content>
      <Content>
        <TodoFilter>
          {Object.keys(filters).map((type) => (
            <Filter
              select={filter === type && "selected"}
              key={type}
              onClick={(e) => {
                e.preventDefault();
                handleChangeFilter(type);
              }}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </Filter>
          ))}
        </TodoFilter>
      </Content>

      <Content>
        <Clear
          onClick={() => {
            handleClearCompleted();
          }}
        >
          Clear completed
        </Clear>
      </Content>
    </Container>
  );
};

export default Footer;

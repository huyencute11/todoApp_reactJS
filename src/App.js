// import { useStore, actions } from "./store";
// import { useRef } from "react";
import TodoList from "./Components/TodoList";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import styled from "styled-components";
const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  ${"" /* background: #347980; */}
  background: linear-gradient(#347980,#4e5494);
  box-shadow: 4px 6px 6px 6px rgba(0, 0, 0, 0.3);
  @media (max-width: 812px) {
    width: 100vw;
    height: 100%;
    box-shadow: none;
  }
  @media (max-width: 737px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
  }
`;
function App() {
  return (
    <Container>
      <Header />
      <Create />
      <TodoList />
      <Footer />
    </Container>

    /* <div style={{ marginLeft: "30px" }}>
      <input
        ref={txtRef}
        value={todoInput}
        placeholder="Enter todo..."
        onKeyUp={(event) => {
          event.keyCode === 13 && todoInput && handleAdd();
        }}
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {" "}
            {todo}
            <button
              onClick={() => {
                handleDelete(index);
              }}
              style={{
                marginLeft: "30px",
                color: "red",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>*/
  );
}
export default App;

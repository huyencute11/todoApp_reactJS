import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  TOGGLE_COMPLETE,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
} from "./constant";
const todos = JSON.parse(localStorage.getItem("todos"));
const initState = {
  todos: todos || [],
  todoInput: "",
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
};
let i = 0;
// console.log(todos);
function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO_INPUT:
      const title = action.payload;
      let newTodos1 = [...state.todos, { title, completed: false }];
      localStorage.setItem("todos", JSON.stringify(newTodos1));
      return {
        ...state,
        todos: newTodos1,
      };
    case DELETE_TODO_INPUT:
      let newTodos = [...state.todos];
      newTodos.splice(action?.payload, 1);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case TOGGLE_COMPLETE:
      console.log(i++);
      const todo = todos[action?.payload];

      todo.completed = !todo.completed;
      const todoCompleted = [...state.todos];
      localStorage.setItem("todos", JSON.stringify(todoCompleted));
      console.log([...state.todos]);
      return {
        ...state,
        todos: todoCompleted,
      };
    // break;
    case CHANGE_FILTER:
      console.log(action?.payload);
      return {
        ...state,
        filter: action.payload,
      };
    case CLEAR_COMPLETED:
      let todoClear = [...state.todos];
      todoClear = todos.filter(state?.filters?.active);
      localStorage.setItem("todos", JSON.stringify(todoClear));
      console.log(todoClear);
      return {
        ...state,
        todos: todoClear,
      };
    default:
      throw new Error("nnnn");
      break;
  }
}
export { initState };
export default reducer;

import React, { useState, useReducer } from 'react';
import Todo from './Todo';
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
      });
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    completed: false,
  };
};
function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };
  console.log(todos, '111');
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default Todos;

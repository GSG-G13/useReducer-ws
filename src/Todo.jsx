import React from 'react';
import { ACTIONS } from './Todos';

function Todo({ todo, dispatch }) {
  console.log(todo);
  return (
    <div>
      <span style={{ color: todo.completed ? '#AAA' : '#000' }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
    </div>
  );
}

export default Todo;

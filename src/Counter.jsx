import React, { useState, useReducer } from 'react';

const ACTIONS = {
  DECREMENT: 'decrement',
  INCREMENT: 'increment',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT, payload: 2 });
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;

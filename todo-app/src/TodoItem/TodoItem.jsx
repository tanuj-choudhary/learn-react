import React from 'react';

import './todo-item.css';

const TodoItem = ({ id, text, handleDeleteTodo, handleEditTodo }) => {
  return (
    <li id="todo-item">
      <div className="todo-item-left">{text}</div>
      <div id="todo-item-right">
        <i
          onClick={() => handleEditTodo(id)}
          className="fa-solid fa-pen-to-square"
        ></i>
        <i
          onClick={() => handleDeleteTodo(id)}
          className="fa-solid fa-trash"
        ></i>
      </div>
    </li>
  );
};

export default TodoItem;

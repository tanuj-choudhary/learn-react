import React from 'react';
import { useState } from 'react';

import TodoItem from '../TodoItem/TodoItem';
import TodoEdit from '../TodoEdit/TodoEdit';

import './todo-list.css';

function TodoList() {
  const [todoText, setTodoText] = useState('');

  const [todoList, setTodoList] = useState([
    {
      id: '1',
      text: 'Do groceries',
      edit: false,
    },
    {
      id: '2',
      text: 'Complete Assignments',
      edit: false,
    },
  ]);

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText === '') {
      alert('Cannot add empty todo');
      return;
    }

    setTodoList((prevTodolist) => [
      ...prevTodolist,
      { id: Date.now(), text: todoText, edit: false },
    ]);
    setTodoText('');
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const handleEditTodo = (id) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, edit: true };
        }
        return todoItem;
      })
    );
  };

  const handleEditSubmit = (id, newText) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, text: newText, edit: false };
        }
        return todoItem;
      })
    );
  };

  return (
    <div id="container">
      <input
        id="todo-input"
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="What needs to be done? "
      />
      <button id="add-todo-btn" onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul id="todo-list">
        {todoList.map((todoItem) => {
          return !todoItem.edit ? (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
            />
          ) : (
            <TodoEdit
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              handleEditSubmit={handleEditSubmit}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

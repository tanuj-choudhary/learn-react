import React, { useState } from 'react';

import './todo-edit.css';

function TodoEdit({ id, text, handleEditSubmit }) {
  const [newText, setnewText] = useState(text);

  const handleInputChange = (e) => {
    setnewText(e.target.value);
  };

  return (
    <div id="todo-edit-container">
      <input
        onChange={handleInputChange}
        id="todo-edit-input"
        value={newText}
        type="text"
        autoFocus
      />
      <button id="save-btn" onClick={() => handleEditSubmit(id, newText)}>
        Save
      </button>
    </div>
  );
}

export default TodoEdit;

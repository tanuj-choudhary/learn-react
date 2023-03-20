import React, { useState } from 'react';

import './todo-edit.css';

function TodoEdit({ id, text, handleEditSubmit }) {
  const [newText, setnewText] = useState(text);

  const handleInputChange = (e) => {
    setnewText(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleInputChange}
        id="todo-edit"
        value={newText}
        type="text"
        onBlur={() => handleEditSubmit(id, newText)}
        autoFocus
      />
    </>
  );
}

export default TodoEdit;

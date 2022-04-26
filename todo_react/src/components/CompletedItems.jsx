import React, { useState } from 'react';

const CompletedItems = ({ todo, handleSubmit }) => {
  const [completedTodo, setPendingTodo] = useState(todo);

  const handleCompletedChange = (event) => {
    handleSubmit({
      ...completedTodo,
      completed: event.target.checked
    })
  }
  
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" onChange={handleCompletedChange} checked={completedTodo.completed} id={`checkbox${completedTodo.id}`} />
      <label className="form-check-label" htmlFor={`checkbox${completedTodo.id}`}>
        {completedTodo.title}
      </label>
    </div>
  );
}

export default CompletedItems;
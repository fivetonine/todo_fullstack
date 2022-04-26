import React, { useState } from 'react';

const PendingItems = ({ todo, handleSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [pendingTodo, setPendingTodo] = useState(todo);

  const handleClick = () => {
    setEditing(true);
  }

  const handleTitleChange = (event) => {
    setPendingTodo({
      ...pendingTodo,
      title: event.target.value
    })
  }

  const handleCompletedChange = (event) => {
    handleSubmit({
      ...pendingTodo,
      completed: event.target.checked
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
      handleSubmit(pendingTodo);
    }
  }
  
  return editing ? (
    <div className="form-check editing">
      <input className="form-check-input" disabled type="checkbox" defaultChecked={pendingTodo.completed} />
      <input type="text" className="form-control-plaintext" value={pendingTodo.title} onChange={handleTitleChange} onKeyDown={handleKeyDown} autoFocus/>
    </div>
  ) : (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultChecked={pendingTodo.completed} onChange={handleCompletedChange} id={`checkbox${pendingTodo.id}`}/>
      <label className="form-check-label" htmlFor={`checkbox${pendingTodo.id}`} onClick={handleClick} >
        {pendingTodo.title}
      </label>
    </div>
  )
}

export default PendingItems;
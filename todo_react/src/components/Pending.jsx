import React from 'react';
import PendingItems from './PendingItems';

const Pending = ({ pending }) => {
  const handleSubmit = (body) => {
    const url = "http://localhost:3001/api/todos/update";

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(() => console.log('An error occurred while adding the todo item'));
  }
  
  return (
    <div>
      <h4>Pending</h4>
      {pending.map((todo, i) => {
        return (
          <PendingItems key={i} todo={todo} handleSubmit={handleSubmit} />
        )
      })}
    </div>
  )
}

export default Pending;
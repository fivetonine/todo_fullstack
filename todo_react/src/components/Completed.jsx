import React from 'react';
import CompletedItems from './CompletedItems';

const Completed = ({ completed }) => {
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
      <h4>Completed</h4>
      {completed.map((todo, i) => {
        return (
          <CompletedItems key={i} todo={todo} handleSubmit={handleSubmit} />
        )
      })}
    </div>
  )
}

export default Completed;
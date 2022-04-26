import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Pending from './Pending';
import Completed from './Completed';

const Home  = () => {
  const [todos, setTodos] = useState({});
  const [loading, setLoading] = useState(true);
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const url = "http://localhost:3001/api/todos/all_todos";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        setTodos(response);
        setLoading(false);
      })
      .catch(() => console.log('An error occurred while fetching the todos'));
  }, []);

  const showAddTodo = () => {
    setAddTodo(true)
  }

  const cancelAdd = () => {
    setAddTodo(false)
  }

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(todo === '') return;

    const todoBody = {
      title: todo,
      completed: false
    };
    
    const url = "http://localhost:3001/api/todos/create";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoBody)
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
    <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Todo</h1>
          <p className="lead">
            A curated list of recipes for the best homemade meal and delicacies.
          </p>
          <hr className="my-4" />
          {
            !addTodo && <button type="button" className="btn btn-primary align-right" onClick={showAddTodo}>Add Todo</button>
          }
          {
            addTodo && (
              <form className="add-todo" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-9">
                    <input type="text" className="form-control-plaintext mr-3" autoFocus placeholder="Todo Item" onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary col mr-2">Add</button>
                  <button className="btn btn-outline-primary col" onClick={cancelAdd}>Cancel</button>
                </div>
              </form>
            )
          }
          {
            loading ? <Loader /> : (
              <div>
                <Pending pending={todos.pending} />
                <hr className="my-4" />
                <Completed completed={todos.completed} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
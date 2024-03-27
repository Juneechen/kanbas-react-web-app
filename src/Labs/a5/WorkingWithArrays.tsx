import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const removeTodo = async (todo: any) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <input
        className="form-control"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button className="btn btn-success" onClick={updateTitle}>
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
            <button className="btn btn-danger" onClick={() => removeTodo(todo)}>
              Remove
            </button>
            <button
              className="btn btn-warning"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <h4>Updating an Item in an Array</h4>
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />{" "}
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        {todo.completed.toString()}
      </label>
      <textarea
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      ></textarea>
      <br />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      <a
        className="btn btn-light"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed to {todo.completed.toString()}
      </a>
      <a
        className="btn btn-light"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID{" "}
      </a>
      <h4>Filtering Array Items</h4>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}>Create Todo</a>
      <h4>Deleting from an Array</h4>
      <a href={`${API}/${todo.id}/delete`}>Delete Todo with ID = {todo.id}</a>
    </div>
  );
}
export default WorkingWithArrays;

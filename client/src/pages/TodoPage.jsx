import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/api";
import AppPic from "../assets/todo-app-logo.png";
import Footer from "../components/Footer";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    description: "",
    status: "pending",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAddOrUpdateTodo = async () => {
    if (isEditMode) {
      await updateTodo(editTodoId, currentTodo);
    } else {
      await addTodo(currentTodo);
    }
    setCurrentTodo({ title: "", description: "", status: "pending" });
    setIsEditMode(false);
    setEditTodoId(null);
    fetchTodos();
  };

  const handleEditTodo = (todo) => {
    setCurrentTodo({
      title: todo.title,
      description: todo.description,
      status: todo.status,
    });
    setIsEditMode(true);
    setEditTodoId(todo._id);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row mb-5">
            <div className="col-3">
              <img
                src={AppPic}
                style={{ width: "20%", height: "auto" }}
                alt="App Logo"
              />
              <span style={{ marginLeft: 20 }}>Welcome, {userName}</span>
            </div>
            <div className="col-8 offset-1 text-end">
              <a href="/:id">Profile</a> | <a href="/logout">Logout</a>
            </div>
          </div>
          <div className="row">
            {/* Form Section */}
            <div className="col-3">
              <h5>{isEditMode ? "Edit item" : "Add item"}</h5>
              <hr />
              <label className="form-label">Title</label>
              <input
                value={currentTodo.title}
                onChange={(e) =>
                  setCurrentTodo({ ...currentTodo, title: e.target.value })
                }
                placeholder="Title"
                className="form-control"
              />
              <label className="form-label">Description</label>
              <input
                value={currentTodo.description}
                onChange={(e) =>
                  setCurrentTodo({
                    ...currentTodo,
                    description: e.target.value,
                  })
                }
                placeholder="Description"
                className="form-control"
              />
              <label className="form-label">Status</label>
              <select
                value={currentTodo.status}
                onChange={(e) =>
                  setCurrentTodo({ ...currentTodo, status: e.target.value })
                }
                className="form-control"
              >
                <option value="pending">Pending</option>
                <option value="done">Done</option>
              </select>
              <button
                className="btn btn-primary mt-3"
                onClick={handleAddOrUpdateTodo}
              >
                {isEditMode ? "Update" : "Save"}
              </button>
            </div>

            {/* Todo List Section */}
            <div className="col-8 offset-1">
              <h5>Available todo items</h5>
              <hr />

              {/* Table-like Header */}
              <div className="row font-weight-bold mb-2">
                <div className="col-3">Title</div>
                <div className="col-4">Description</div>
                <div className="col-2">Status</div>
                <div className="col-3">Actions</div>
              </div>

              {/* Todo Items */}
              {todos.map((todo) => (
                <div className="row align-items-center mb-2" key={todo._id}>
                  <div className="col-3">
                    <span>{todo.title}</span>
                  </div>
                  <div className="col-4">
                    <span>{todo.description}</span>
                  </div>
                  <div className="col-2">
                    <span>{todo.status}</span>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-info btn-sm mr-2"
                      onClick={() => handleEditTodo(todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteTodo(todo._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <button id="btnScrollToTop" className="float-button">
        Top
      </button>
      <Footer />
    </div>
  );
};

export default TodoPage;

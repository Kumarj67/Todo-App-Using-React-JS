import React from "react";
import { FiEdit, FiTrash2, FiCheckCircle } from "react-icons/fi";
const TodoList = ({ todos, setTodos, setEditTodos, editTodos }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodos(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            className={`font-light border ${
              todo.completed ? "line-through" : ""
            }`}
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />
          <div className="inline">
            <button className="m-[4px]" onClick={() => handleComplete(todo)}>
              <FiCheckCircle size={25}></FiCheckCircle>
            </button>
            <button className="" onClick={() => handleEdit(todo)}>
              <FiEdit size={25}></FiEdit>
            </button>
            <button onClick={() => handleDelete(todo)}>
              <FiTrash2 size={25}></FiTrash2>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

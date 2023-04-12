import React from "react";
import { FiEdit, FiTrash2, FiCheckCircle } from "react-icons/fi";
const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            className="font-light border"
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />
          <div className="inline">
            <button className="m-[4px]">
              <FiCheckCircle size={25}></FiCheckCircle>
            </button>
            <button className="">
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

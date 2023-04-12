import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodos,
  setEditTodos,
}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title: title, id: id, completed: completed } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  useEffect(() => {
    if (editTodos) {
      setInput(editTodos.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodos]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodos) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodos.id, editTodos.completed);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a To do...."
          className="m-4 h-[35px] w-[200px] hover:scale-105 bg-black p-4 text-white rounded-xl"
          value={input}
          required
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="m-6 text-green-800 bg-gradient-to-r from-cyan-300 to-blue-900 h-10 w-[100px] hover:scale-105 font-bold rounded-xl "
        >
          {editTodos ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;

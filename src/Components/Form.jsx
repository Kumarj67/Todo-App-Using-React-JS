import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
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
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

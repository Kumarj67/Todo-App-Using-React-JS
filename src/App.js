import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);

  return (
    <>
      <div className="h-screen bg-black">
        <div className="flex justify-center items-center ">
          <div className="h-[600px] w-[400px] border bg-white text-black mt-[50px]">
            <Header></Header>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodos={editTodos}
              setEditTodos={setEditTodos}
            ></Form>
            <div className="flex items-center justify-center font-bold text-xl">
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setEditTodos={setEditTodos}
              ></TodoList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

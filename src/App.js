import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const AddItemToList = () => {
    const id = todoList.length + 1;

    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
      },
    ]);

    setInput("");
  };

  return (
    <div>
      <div>
        <h2>Todo List</h2>

        <input value={input} onInput={(e) => setInput(e.target.value)} />

        <button onClick={() => AddItemToList()}>Add</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <li>
                <input type="checkbox" />
                {todo.task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

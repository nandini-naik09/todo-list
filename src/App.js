import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const AddItemToList = () => {
    const id = todoList.length + 1;

    if (input === "") {
      alert("Please Enter task");
    } else {
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
        },
      ]);

      setInput("");
    }
  };

  const clearToDoList = () => {
    setTodoList([]);
    setInput("");
  };

  return (
    
    <div>
      <center>
      <div>
        <h2>Todo List</h2>

        <input classname="task-input" value={input} onInput={(e) => setInput(e.target.value)} />

        <button className="redirect-link-green-square" onClick={() => AddItemToList()}>Add</button>
        <button className="redirect-link-green-square" onClick={() => clearToDoList()}>Clear All Items</button>
      </div>
      </center>
      <br/>
      <div className="tasklist">
        <p className="para"> Your List</p>
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

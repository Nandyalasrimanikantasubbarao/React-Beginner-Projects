import { useState } from "react";
import "./todo.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function handleSubmit() {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      })
    );
    setInput("");
  }

  function handleDelete(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
    console.log(id);
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="new Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>sumit</button>

      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="close" onClick={() => handleDelete(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

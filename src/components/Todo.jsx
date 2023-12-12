import { useState } from "react";
import ".././CSS_Files/Todo.css";
import { useRef } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

let count = 0;
const Todo = (props) => {
  // state variables
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const addTodo = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);
  return (
    <div
      className={`todo ${
        props.appMode === "light" ? "todo-dark" : "todo-light"
      }`}
    >
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add your task"
          className="todo-input"
        />
        <div className="todo-add-btn" onClick={addTodo}>
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos &&
          todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                no={todo.no}
                text={todo.text}
                display={todo.display}
                setTodos={setTodos}
              />
            );
          })}
      </div>
    </div>
  );
};
Todo.propTypes = {
  appMode: PropTypes.string,
};
export default Todo;

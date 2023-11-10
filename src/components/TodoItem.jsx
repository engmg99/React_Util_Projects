import ".././CSS_Files/TodoItem.css";
import tick from ".././assets/tick.png";
import not_tick from ".././assets/not_tick.png";
import cross from ".././assets/cross.png";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    props.setTodos(data);
  };

  const deleteTodo = (todoNo) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== todoNo);
    props.setTodos(data);
  };

  return (
    <div className="todo-items">
      <div
        className={`todo-item-container ${props.display}`}
        onClick={() => toggle(props.no)}
      >
        {props.display === "" ? (
          <img src={not_tick} alt="not_tick" />
        ) : (
          <img src={tick} alt="tick" />
        )}
        <div className="todo-item-text">{props.text}</div>
      </div>
      <img
        className="todo-items-cross-icon"
        src={cross}
        alt="cross"
        onClick={() => {
          deleteTodo(props.no);
        }}
      />
    </div>
  );
};
TodoItem.propTypes = {
  text: PropTypes.string,
  display: PropTypes.string,
  no: PropTypes.number,
  setTodos: PropTypes.func,
};
export default TodoItem;

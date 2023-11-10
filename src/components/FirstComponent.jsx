import { useRef } from "react";
import { useState } from "react";

const x = "Learning React"; // using variables
const arr = ["user1", "user2", "user3", "user4"]; // array func
let data = "girl"; // conditional rendering
let uuid = self.crypto.randomUUID();
// console.log(uuid);

const FirstComponent = (props) => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [refHook, setRefHook] = useState([]);
  const btnClick = () => {
    setCount(count + 1);
    alert(count);
  };

  return (
    <>
      <div className="container">
        <h3>{props.title}</h3>
        {x}
        <br />

        {arr.map((i) => (
          <h2 key={i}>{i}</h2>
        ))}
        <br />

        {(data = "boy")}

        {data === "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}
        <br />

        {count}
        <button
          onClick={() => {
            btnClick();
          }}
        >
          Click Me
        </button>
        <input ref={inputRef} type="text" />
        <button
          onClick={() => {
            setRefHook([...refHook, inputRef.current.value]);
            console.log(inputRef.current.value);
          }}
        >
          Submit
        </button>
        {refHook.map((i, index) => {
          return <h2 key={index}>{i}</h2>;
        })}
      </div>
    </>
  );
};

export default FirstComponent;

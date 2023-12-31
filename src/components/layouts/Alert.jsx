import React from "react";

const Alert = (props) => {
  const captilize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:'50px'}}>
    {props.alert?.msg.length > 0 && 
      <div
        className={`alert alert-${props?.alert?.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{captilize(props?.alert?.type)}</strong> : {props?.alert?.msg}
      </div>}
    </div>
  );
};

export default Alert;

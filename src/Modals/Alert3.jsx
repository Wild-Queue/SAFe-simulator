import React from "react";

export default function Alert({ type, message, closeHandler }) {
  let className = "d-flex alert ";
  if (type) className += "alert-" + type + " ";

  return (
    <div className={className}>
      <div className="me-2">{message}</div>
      <button
        type="button"
        className="btn-close"
        onClick={closeHandler}
      ></button>
    </div>
  );
}

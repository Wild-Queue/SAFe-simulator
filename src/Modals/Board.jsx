import React from "react";

const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("cardId");

    const card = document.getElementById(cardId);
    if (card) {
      props.cardDrop(cardId);
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const { children, id, className } = props;
  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={className}>
      {children}
    </div>
  );
};

export default Board;

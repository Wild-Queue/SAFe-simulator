import React from "react";
import Board from "./Board";

const Sprint3 = (props) => {
  const { cards, children, onCardDrop, className } = props;

  return (
    <div>
      {children}
      <Board cardDrop={onCardDrop} className={className}>
        {cards}
      </Board>
    </div>
  );
};

export default Sprint3;

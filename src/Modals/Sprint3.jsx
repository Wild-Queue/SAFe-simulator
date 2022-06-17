import React from "react";
import Board from "./Board";

const Sprint3 = (props) => {
  const { cards, children, onCardDrop } = props;

  return (
    <div>
      {children}
      <Board
        cardDrop={onCardDrop}
        className="d-flex flex-column align-items-center m-1 rounded pb-5 sprint"
      >
        {cards}
      </Board>
    </div>
  );
};

export default Sprint3;

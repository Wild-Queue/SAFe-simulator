import React from "react";
import Card3 from "./Card3";

const Sprint3 = (props) => {
  let { cards } = props;
  const { children } = props;

  if (!cards) cards = [];
  return (
    <div>
      {children}
      <div
        className="d-flex flex-column align-items-center m-1 rounded"
        style={{ minWidth: "16.1rem", minHeight: "15rem", background: "#eee" }}
      >
        {cards.map((card) => (
          <Card3 key={card.storyNumber} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Sprint3;

import React, { Component } from "react";
import Card3 from "../Modals/Card3";
import "bootstrap/dist/css/bootstrap.css";
import { getCards3 } from "../services/cards3";
import Sprint3 from "../Modals/Sprint3";

class ThirdPage extends Component {
  state = {
    cards: getCards3(),
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex align-items-start mx-auto mt-2">
          <Sprint3>
            <h4 className="text-center">Sprint 1</h4>
          </Sprint3>
          <Sprint3>
            <h4 className="text-center">Sprint 2</h4>
          </Sprint3>
          <Sprint3>
            <h4 className="text-center">Sprint 3</h4>
          </Sprint3>
          <Sprint3>
            <h4 className="text-center">Sprint 4</h4>
          </Sprint3>
          <Sprint3>
            <h4 className="text-center">Sprint 5</h4>
          </Sprint3>
          <Sprint3>
            <h4 className="text-center">Sprint 6</h4>
          </Sprint3>
        </div>
        <div className="d-flex align-items-start flex-wrap">
          {this.state.cards.map((card) => (
            <Card3 key={card.storyNumber} card={card} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ThirdPage;

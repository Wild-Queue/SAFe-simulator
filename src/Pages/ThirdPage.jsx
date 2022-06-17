import React, { Component } from "react";
import Card3 from "../Modals/Card3";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/thirdModule.css";
import { getCards3, getSprints3 } from "../services/thirdModuleDatas";
import Sprint3 from "../Modals/Sprint3";

class ThirdPage extends Component {
  state = {
    cardsData: {},
    sprints: [],
    cardSprint: {},
  };

  componentDidMount() {
    const cards = getCards3();
    const cardsData = {};
    const sprints = getSprints3();
    const cardSprint = {};
    cards.forEach((cardData) => {
      cardsData[cardData.id] = cardData;
    });
    sprints.forEach((sprint, index) => {
      sprint.forEach((cardId) => {
        cardSprint[cardId] = index;
      });
    });
    this.setState({ cardsData, sprints, cardSprint });
  }

  createCard = (cardId) => (
    <Card3 key={cardId} card={this.state.cardsData[cardId]} draggable={true} />
  );

  handleCardDrop = (cardId, newSprintId) => {
    console.log(cardId, newSprintId);
    const cardSprint = { ...this.state.cardSprint };
    const oldSprintId = cardSprint[cardId];
    const sprints = [...this.state.sprints];
    if (oldSprintId >= 0) {
      sprints[oldSprintId] = sprints[oldSprintId].filter(
        (cId) => cId !== cardId
      );
    }
    const newSprint = [...sprints[newSprintId]];
    newSprint.push(cardId);
    sprints[newSprintId] = newSprint;
    cardSprint[cardId] = newSprintId;

    this.setState({ cardSprint, sprints });
  };

  render() {
    const { cardsData, sprints, cardSprint } = this.state;

    const sprintsSizes = sprints.map((sprint) => {
      let sprintSize = 0;
      sprint.forEach((cardId) => {
        sprintSize += cardsData[cardId].size || 0;
      });
      return sprintSize;
    });

    const sprintsCards = sprints.map((sprint) =>
      sprint.map((cardId) => this.createCard(cardId))
    );
    // console.log(sprints);
    // console.log(cardSprint);
    return (
      <React.Fragment>
        <div className="d-flex align-items-stratch mx-auto mt-2">
          {sprints.map((sprint, index) => (
            <Sprint3
              onCardDrop={(cardId) => this.handleCardDrop(cardId, index)}
              key={index}
              cards={sprintsCards[index]}
            >
              <h4 className="text-center">
                Sprint {index + 1}{" "}
                {sprintsSizes[index] ? (
                  <span className="badge rounded-pill bg-white text-dark border">
                    {sprintsSizes[index]}
                  </span>
                ) : (
                  ""
                )}
              </h4>
            </Sprint3>
          ))}
        </div>
        <div className="d-flex align-items-start flex-wrap">
          {Object.keys(cardsData).map((key) =>
            !(cardSprint[cardsData[key].id] >= 0)
              ? this.createCard(cardsData[key].id)
              : ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ThirdPage;

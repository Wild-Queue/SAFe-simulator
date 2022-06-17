import React, { Component } from "react";
import Card3 from "../Modals/Card3";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/thirdModule.css";
import {
  getCards3,
  getSprints3,
  getEpicsColor,
} from "../services/thirdModuleDatas";
import Sprint3 from "../Modals/Sprint3";
import FirstModuleHeader from "../components/FirstModuleHeader";

class ThirdPage extends Component {
  state = {
    cardsData: {},
    sprints: [],
    cardSprint: {},
    epicsColor: {},
  };

  componentDidMount() {
    const cards = getCards3();
    const cardsData = {};
    const sprints = getSprints3();
    const cardSprint = {};
    const epicsColor = getEpicsColor();
    cards.forEach((cardData) => {
      cardsData[cardData.id] = cardData;
    });
    sprints.forEach((sprint, index) => {
      sprint.forEach((cardId) => {
        cardSprint[cardId] = index;
      });
    });
    this.setState({ cardsData, sprints, cardSprint, epicsColor });
  }

  createCard = (cardId) => {
    const { cardsData, epicsColor } = this.state;
    return (
      <Card3
        key={cardId}
        card={cardsData[cardId]}
        draggable={true}
        epicColor={epicsColor[cardsData[cardId].epic]}
      />
    );
  };

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
    if (newSprintId !== "reserveSprint") {
      const newSprint = [...sprints[newSprintId]];
      newSprint.push(cardId);
      sprints[newSprintId] = newSprint;
      cardSprint[cardId] = newSprintId;
    } else {
      delete cardSprint[cardId];
    }
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
        <div className="d-flex flex-column">
          <FirstModuleHeader />
          <div className="d-flex align-items-stratch mx-auto mt-5">
            {sprints.map((sprint, index) => (
              <Sprint3
                onCardDrop={(cardId) => this.handleCardDrop(cardId, index)}
                key={index}
                cards={sprintsCards[index]}
                className="d-flex flex-column align-items-center m-3 rounded pb-5 sprint"
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
          <Sprint3
            className="d-flex align-content-start align-items-start flex-wrap reserve-sprint mt-5"
            onCardDrop={(cardId) =>
              this.handleCardDrop(cardId, "reserveSprint")
            }
            cards={Object.keys(cardsData).map((key) =>
              !(cardSprint[cardsData[key].id] >= 0)
                ? this.createCard(cardsData[key].id)
                : ""
            )}
          ></Sprint3>
        </div>
      </React.Fragment>
    );
  }
}

export default ThirdPage;

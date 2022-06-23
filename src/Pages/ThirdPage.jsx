import React, { Component } from "react";
import Card3 from "../Modals/Card3";
import Board from "../Modals/Board";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/thirdModule.css";
import Alert from "../Modals/Alert3";
import {
  getCards3,
  getSprints3,
  getEpicsColor,
  getFeaturesMapper,
} from "../services/thirdModuleDatas";
import Sprint3 from "../Modals/Sprint3";

import FirstModuleHeader from "../components/FirstModuleHeader";

class ThirdPage extends Component {
  state = {
    cardsData: {},
    sprints: [],
    cardSprint: {},
    epicsColor: {},
    dependantCardId: undefined,
    providerCardId: undefined,
    exceededSprintId: undefined,
  };
  dragParameters = {};

  handleDragEnter = (cardId) => {
    // console.log("handleDragEnter", cardId);
    this.dragParameters["enteredCardId"] = cardId;
  };

  handleDragLeave = (cardId) => {
    // console.log("handleDrageLeave", cardId);
    delete this.dragParameters["enteredCardId"];
  };

  getSprintSize(sprint) {
    let sprintSize = 0;
    sprint.forEach((cardId) => {
      sprintSize += this.state.cardsData[cardId].size || 0;
    });
    return sprintSize;
  }

  componentDidMount() {
    const cards = getCards3();
    const cardsData = {};
    const sprints = getSprints3();
    const cardSprint = {};
    const epicsColor = getEpicsColor();
    const featuresMapper = getFeaturesMapper();
    const features = this.props.features;
    let loadedCounter = 0;
    cards.forEach((cardData) => {
      let isFoundInFeatures = false;
      features.forEach((code) => {
        if (
          cardData.epic === featuresMapper[code].epic &&
          cardData.feature === featuresMapper[code].feature
        ) {
          isFoundInFeatures = true;
        }
      });
      if (isFoundInFeatures) cardsData[cardData.id] = cardData;
      loadedCounter += isFoundInFeatures;
    });
    console.log(
      "From " +
        cards.length +
        " cards, " +
        loadedCounter +
        " of them have been loaded based on the received list of features!"
    );
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
        dragEnter={this.handleDragEnter}
        dragLeave={this.handleDragLeave}
        epicColor={epicsColor[cardsData[cardId].epic]}
      />
    );
  };

  handleDependencyAlertClose = (e) => {
    e.preventDefault();
    this.setState({ dependantCardId: undefined, providerCardId: undefined });
  };

  handleExceedenceAlertClose = (e) => {
    e.preventDefault();
    this.setState({ exceededSprintId: undefined });
  };

  handleCardDrop = (cardId, newSprintId) => {
    // checking the dependencies
    const card = this.state.cardsData[cardId];
    if (
      newSprintId !== "reserveSprint" &&
      this.getSprintSize(this.state.sprints[newSprintId]) + card.size > 30
    ) {
      this.setState({ exceededSprintId: newSprintId });
      return;
    }
    if (newSprintId !== "reserveSprint") {
      let isDependencyConflict = false;
      Object.keys(this.state.cardsData).forEach((id) => {
        if (
          card.dependsOn === id &&
          !(this.state.cardSprint[id] < newSprintId)
        ) {
          isDependencyConflict = true;
          this.setState({ dependantCardId: cardId, providerCardId: id });
          return;
        }
      });
      if (isDependencyConflict) return;
    }

    const cardSprint = { ...this.state.cardSprint };
    const oldSprintId = cardSprint[cardId];
    const sprints = [...this.state.sprints];
    const enteredCardId = this.dragParameters["enteredCardId"];
    delete this.dragParameters["enteredCardId"];
    if (oldSprintId >= 0) {
      sprints[oldSprintId] = sprints[oldSprintId].filter(
        (cId) => cId !== cardId
      );
    }
    if (newSprintId !== "reserveSprint") {
      const newSprint = [...sprints[newSprintId]];
      if (enteredCardId) {
        const indexOfBeforeId = newSprint.findIndex(
          (el) => el === enteredCardId
        );
        newSprint.splice(indexOfBeforeId, 0, cardId);
      } else {
        newSprint.push(cardId);
      }
      sprints[newSprintId] = newSprint;
      cardSprint[cardId] = newSprintId;
    } else {
      delete cardSprint[cardId];
    }
    this.setState({ cardSprint, sprints });
  };

  render() {
    const {
      cardsData,
      sprints,
      cardSprint,
      dependantCardId,
      providerCardId,
      exceededSprintId,
    } = this.state;

    const sprintsSizes = sprints.map((sprint) => {
      return this.getSprintSize(sprint);
    });

    const sprintsCards = sprints.map((sprint) =>
      sprint.map((cardId) => this.createCard(cardId))
    );
    // console.log(sprints);
    // console.log(cardSprint);
    return (
      <React.Fragment>
        <div className="top-stuck">
          <div className="d-flex flex-column">
            <FirstModuleHeader />
            <div className="alerts-container3">
              {dependantCardId && (
                <Alert
                  type="danger"
                  message={`Карта ${dependantCardId} зависит от карты ${providerCardId}. Убедитесь, что карта ${dependantCardId} поставлена на более поздний спринт, чем карта ${providerCardId}.`}
                  closeHandler={this.handleDependencyAlertClose}
                ></Alert>
              )}
              {exceededSprintId && (
                <Alert
                  type="danger"
                  message={`Ставить эту карту в спринт ${exceededSprintId +
                    1} нельзя. Размер спринта не должен превышать 30.`}
                  closeHandler={this.handleExceedenceAlertClose}
                ></Alert>
              )}
            </div>
            <div className="d-flex align-items-stratch mx-auto mt-5">
              {sprints.map((sprint, index) => (
                <Sprint3
                  onCardDrop={(cardId) => this.handleCardDrop(cardId, index)}
                  key={index}
                  cards={sprintsCards[index]}
                  className="d-flex flex-column align-items-center m-3 rounded pb-5 sprint"
                >
                  <h4 className="sprint-heading text-center">
                    Спринт {index + 1}{" "}
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
          </div>
        </div>
        <div className="bottom-stuck">
          <Board
            className="d-flex align-content-start align-items-start flex-wrap reserve-board pt-2"
            cardDrop={(cardId) => this.handleCardDrop(cardId, "reserveSprint")}
          >
            {Object.keys(cardsData).map((key) =>
              !(cardSprint[cardsData[key].id] >= 0)
                ? this.createCard(cardsData[key].id)
                : ""
            )}
          </Board>
        </div>
      </React.Fragment>
    );
  }
}

export default ThirdPage;

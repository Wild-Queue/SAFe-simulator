import React, { Component } from "react";
class Card3 extends Component {
  renderSize(marginTop) {
    const { size } = this.props.card;
    return (
      <h3
        className="text-end mb-n3"
        style={{ margin: `${marginTop} -0.5rem 0 0` }}
      >
        <span className="badge rounded-pill bg-white text-dark border">
          {size}
        </span>
      </h3>
    );
  }
  renderFooter() {
    const { depends } = this.props.card;
    return (
      <div className="card-footer">
        <small className="fw-light text-muted card-header-pills">
          Depends On:
        </small>
        <p className="lh-sm text-muted fst-italic">{depends}</p>
        {this.renderSize("-1.25rem")}
      </div>
    );
  }

  render() {
    const { epic, feature, story, storyNumber, depends } = this.props.card;
    const isDepended = depends == "N/A";
    return (
      <div className="card mb-3" style={{ width: "16rem", cursor: "default" }}>
        <div className="card-header text-white bg-primary">
          <small className="card-subtitle fw-bold">{epic}</small>
          <h5 style={{ marginBottom: "0.25rem" }}>
            {feature}{" "}
            <span className="badge bg-light text-dark">{storyNumber}</span>
          </h5>
        </div>
        <div className="card-body text-dark">
          <p className="card-text">{story}</p>
          {isDepended ? this.renderSize("-2.5rem") : ""}
        </div>
        {!isDepended ? this.renderFooter() : ""}
      </div>
    );
  }
}

export default Card3;

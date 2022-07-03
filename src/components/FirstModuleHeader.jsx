import React, { useState } from "react";
import "../Styles/FirstModule.css";
import RulesWindow from "../Modals/RulesWindow";

const FirstModuleHeader = function() {
  const [modalActive, setModalActive] = useState(false);

  function MoveHome() {
    window.location.assign("../");
  }

  return (
    <div>
      <div className="FM_Header_internal">
        <h1> S.A.F.e Simulator Module 1</h1>
        <div>
          <button onClick={MoveHome} className="FM_Home_Bottom">
            {" "}
            Домой
          </button>
          <button
            onClick={() => setModalActive(true)}
            className="FM_Rules_Bottom"
          >
            {" "}
            Описание модуля{" "}
          </button>
        </div>
      </div>
      <RulesWindow active={modalActive} setActive={setModalActive}>
        Описание
      </RulesWindow>
    </div>
  );
};

export default FirstModuleHeader;

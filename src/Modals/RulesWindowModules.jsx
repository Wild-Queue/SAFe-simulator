import React from "react";
import '../Styles/RulesWindow.css'

const RulesWindowModules = ({active, setActive, children}) => {
    return (
        <div className = {active ? "FM_model active": "FM_modal"} onClick={() => setActive(false)}>
            <div className={active ? "FM_model__content active": "FM_model__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default RulesWindowModules;
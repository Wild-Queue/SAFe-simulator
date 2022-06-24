import React from "react";
import '../Styles/RulesWindow.css'

const RulesWindow = ({active, setActive, children}) => {
    return (
        <div className = {active ? "FP_model active": "FP_modal"} onClick={() => setActive(false)}>
            <div className={active ? "FP_model__content active": "FP_model__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default RulesWindow;
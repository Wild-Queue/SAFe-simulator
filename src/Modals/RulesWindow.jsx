import React from "react";
import './RulesWindow.css'

const RulesWindow = ({active, setActive, children}) => {
    return (
        <div className = {active ? "model active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "model__content active": "model__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default RulesWindow;
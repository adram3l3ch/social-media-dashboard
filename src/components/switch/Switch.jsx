import React from "react";
import "./switch.css";

const Switch = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <div className="switch">
            <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
            <div
                className="toggle"
                onClick={() => {
                    setIsDarkMode(!isDarkMode);
                }}
            >
                <div className={isDarkMode ? "toggle__thumb" : "toggle__thumb active"}></div>
            </div>
        </div>
    );
};

export default Switch;

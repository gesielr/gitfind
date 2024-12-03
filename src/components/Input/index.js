import React from "react";
import "./styles.css";

const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            className="input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;

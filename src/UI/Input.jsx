import React from "react";

function Input({ label, type, id, className,name }) {
    return (
        <div className={`input ${className}`}>
            <label htmlFor={id}>{label} </label>
            <input type={type} id={id} name={name} />
        </div>
    );
}

export default Input;

import React from "react";
import classes from "./FormInput.css";

const formInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={classes.Inp}>
      {label && <label>{label}</label>}

      <input className="formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default formInput;

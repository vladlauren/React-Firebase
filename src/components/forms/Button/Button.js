import React from "react";
import classes from "./Button.css";

const button = ({ children, ...otherProps }) => {
  return (
    <div className={classes.Button}>
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default button;

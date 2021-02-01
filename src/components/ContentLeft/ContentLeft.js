import React from "react";
import classes from "./ContentLeft.css";

const contentLeft = (props) => {
  return (
    <div className={classes.ContentLeft}>
      <div className={classes.Text}>
        <h1>{props.text}</h1>
        <p>{props.textAdiacent}</p>
      </div>
      <img src={props.imagine} />
    </div>
  );
};

export default contentLeft;

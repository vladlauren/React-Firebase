import React from "react";
import classes from "./ContentRight.css";

const contentRight = (props) => {
  return (
    <div className={classes.ContentRight}>
      <div className={classes.Text}>
        <h1>{props.text}</h1>
        <p>{props.textAdiacent}</p>
      </div>
      <img src={props.imagine} />
    </div>
  );
};

export default contentRight;

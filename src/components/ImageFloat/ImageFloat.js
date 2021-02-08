import React from "react";
import imagine from "../../assets/images/Home/3d.png";
import classes from "./ImageFloat.css";

const imageFloat = () => {
  return (
    <div className={classes.Principal}>
      <div className={classes.ImageFloat}>
        <img src={imagine} />
      </div>
    </div>
  );
};

export default imageFloat;

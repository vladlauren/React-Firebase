import React from "react";
import logoCreative from "../../../assets/images/Logo/LOGO.jpg";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoCreative} alt="Creative 3d Prints" />
  </div>
);

export default logo;

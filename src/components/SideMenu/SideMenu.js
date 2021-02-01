import React, { Component } from "react";
import classes from "./SideMenu.css";

class SideMenu extends Component {
  state = {
    visible: false,
  };
  render() {
    const openMenu = () => {
      this.setState((prevState) => ({ visible: !prevState.visible }));
    };

    let attachedClasses = [classes.Side, classes.Open];
    return (
      <div className={classes.SideMenu}>
        <button onClick={openMenu}>&#9776;</button>
        <div
          className={
            this.state.visible ? attachedClasses.join(" ") : classes.Side
          }
        >
          <h1>Categories</h1>
          <u>
            <li>PLA</li>
            <li>ABS</li>
          </u>
        </div>
      </div>
    );
  }
}

export default SideMenu;

import React, { Component } from "react";
import classes from "./Menu.css";
import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    const currentUser = this.props.currentUser;

    return (
      <div className={classes.Linie}>
        <Logo />

        <ul className={classes.Navbar}>
          <li>
            <NavLink exact activeClassName={classes.Active} to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact activeClassName={classes.Active} to="/Magazin">
              Shop
            </NavLink>
          </li>

          {!currentUser && (
            <li style={{ float: "right" }}>
              <NavLink exact activeClassName={classes.Active} to="/Login">
                Log in
              </NavLink>
            </li>
          )}
          {currentUser && (
            <li onClick={() => auth.signOut()} style={{ float: "right" }}>
              <NavLink to="">Log out</NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
Menu.defaulfProps = {
  currentUser: null,
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, null)(Menu);

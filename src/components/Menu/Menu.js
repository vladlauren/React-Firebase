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
              Acasa
            </NavLink>
          </li>

          <li>
            <NavLink exact activeClassName={classes.Active} to="/Magazin">
              Magazin
            </NavLink>
          </li>

          {!currentUser && (
            <li style={{ float: "right" }}>
              <NavLink exact activeClassName={classes.Active} to="/Register">
                Inregistrare
              </NavLink>
            </li>
          )}
          {!currentUser && (
            <li style={{ float: "right" }}>
              <NavLink exact activeClassName={classes.Active} to="/Login">
                Logare
              </NavLink>
            </li>
          )}
          {currentUser && (
            <li onClick={() => auth.signOut()} style={{ float: "right" }}>
              <NavLink to="">LOG OUT</NavLink>
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

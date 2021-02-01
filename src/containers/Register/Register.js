import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import classes from "./Register.css";
import arrowRight from "../../assets/images/Login/arrowRight.png";

import { auth, handleUserProfile } from "../../firebase/utils";

import FormInput from "../../components/forms/FormInput/FormInput";
import Button from "../../components/forms/Button/Button";

const initialState = {
  displayname: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
    if (password != confirmPassword) {
      const err = ["Password dont mach"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile({ user }, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };
  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
    return (
      <div className={classes.Imagine}>
        <Menu />
        <div className={classes.ArrowR}>
          <img src={arrowRight} />
        </div>
        <div className={classes.Formular}>
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          )}
          <form onSubmit={this.handleFormSubmit}>
            <h2>Inregistrare</h2>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;

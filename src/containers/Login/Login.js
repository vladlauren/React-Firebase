import React, { Component } from "react";
import classes from "./Login.css";
import Button from "../../components/forms/Button/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import arrowLeft from "../../assets/images/Login/arrowLeft.png";
import arrowRight from "../../assets/images/Login/arrowRight.png";
import { Link } from "react-router-dom";

import imprimanta from "../../assets/images/Login/imprimanta.png";

import FormInput from "../../components/forms/FormInput/FormInput";

const initialState = {
  email: "",
  password: "",
};

class Login extends Component {
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
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={classes.Imagine}>
        <Menu />
        <div className={classes.Imagination}>
          <p>
            <i>
              Everything you can imagine is <b>REAL</b>
            </i>
          </p>
        </div>
        <div className={classes.Author}>-PABLO PICASSO</div>

        <div className={classes.Formular}>
          <form onSubmit={this.handleSubmit}>
            <h2>Logare</h2>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password"
              handleChange={this.handleChange}
            />
            <Button type="submit" style={{ color: "black" }}>
              Logare
            </Button>
            <Button onClick={signInWithGoogle} style={{ color: "black" }}>
              Logare folosind Google
            </Button>
            <Link to="/Register">Creaza un cont</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

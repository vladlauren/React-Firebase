import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import ProductScreen from "./containers/ProductScreen/ProductScreen";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Admin from "./containers/Admin/Admin";
import WithAdminAuth from "./hoc/withAdminAuth";
import { setCurrentUser } from "./redux/User/user.actions";
import Cart from "./containers/Cart/Cart";

import { Route, Switch } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";

class App extends Component {
  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/Register" render={() => <Register />} />
          <Route path="/Cart" render={() => <Cart />} />
          <Route path="/Login" render={() => <Login />} />
          <Route path="/Admin" render={() => <Admin />} />
          <Route path="/Magazin" render={() => <Shop />} />
          <Route path="/Products/:id" component={ProductScreen} />
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

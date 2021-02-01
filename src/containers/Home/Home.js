import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContentLeft from "../../components/ContentLeft/ContentLeft";
import ContentRight from "../../components/ContentRight/ContentRight";
import Testimonials from "../../components/Testimonials/Testimonials";
import classes from "./Home.css";
import GoToAdminPanel from "../../components/GoToAdminPanel/GoToAdminPanel";

import imprimanta from "../../assets/images/Home/imprimanta.png";
import produs from "../../assets/images/Home/produs.png";
import delivery from "../../assets/images/Home/delivery.png";

class Home extends Component {
  text = "Cea mai noua tehnologie existenta";
  text2 = "Produse realizate la perfectie";
  text3 = "Livrare in doar 3-4 zile";

  textChild =
    "Produsele printate sunt foarte rezistente deaorece sunt printate cu aparate de ultima generatie. Va asiguram ca produsele noastre rezista atat in spatii interioare cat si exterioare.";
  render() {
    return (
      <div className={classes.Home}>
        <Menu />
        <GoToAdminPanel />
        <ContentLeft
          text={this.text}
          textAdiacent={this.textChild}
          imagine={imprimanta}
        />
        <ContentRight
          text={this.text2}
          textAdiacent={this.textChild}
          imagine={produs}
        />
        <ContentLeft
          text={this.text3}
          textAdiacent={this.textChild}
          imagine={delivery}
        />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default Home;

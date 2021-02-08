import React from "react";
import Carousel from "nuka-carousel";
import unu from "../../assets/images/Slides/unu.jpg";
import doi from "../../assets/images/Slides/doi.jpg";
import trei from "../../assets/images/Slides/trei.jpg";
import patru from "../../assets/images/Slides/patru.jpg";
import cinci from "../../assets/images/Slides/cinci.jpg";

import { Link } from "react-router-dom";

import classes from "./SlideShow.css";

const slideShow = (props) => {
  const proprietati = {
    autoplay: true,
    autoplayInterval: 5000,
  };
  return (
    <div className={classes.Slide}>
      <h1>Cateva dintre produsele noastre</h1>
      <Carousel {...proprietati}>
        <div className={classes.InteriorSlide}>
          <img className={classes.Imagine} src={unu} />
          <img className={classes.Imagine} src={doi} />
          <img className={classes.Imagine} src={trei} />
        </div>
        <div className={classes.InteriorSlide}>
          <img className={classes.Imagine} src={patru} />
          <img className={classes.Imagine} src={cinci} />
          <img className={classes.Imagine} src={doi} />
        </div>
        <div className={classes.InteriorSlide}>
          <img className={classes.Imagine} src={patru} />
          <img className={classes.Imagine} src={doi} />
          <img className={classes.Imagine} src={cinci} />
        </div>
      </Carousel>
      <div className={classes.TextSlide}>
        Vezi toate produsele noastre la{" "}
        <b>
          <Link to="/Magazin">Magazin</Link>
        </b>
      </div>
    </div>
  );
};

export default slideShow;

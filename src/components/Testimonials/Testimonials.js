import React from "react";
import classes from "./Testimonials.css";
import Testimonial from "./Testimonial/Testimonial";

const testimonials = () => {
  return (
    <div className={classes.Principal}>
      <h1>Ce zic persoanele care au cumparat de la noi?</h1>
      <div className={classes.Testimonials}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default testimonials;

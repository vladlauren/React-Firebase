import React from "react";
import classes from "./Testimonials.css";
import Testimonial from "./Testimonial/Testimonial";

const testimonials = () => {
  return (
    <div className={classes.Testimonials}>
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div>
  );
};

export default testimonials;

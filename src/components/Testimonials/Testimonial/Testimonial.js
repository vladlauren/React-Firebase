import React from "react";
import classes from "./Testimonial.css";

const testimonial = () => {
  const style = [classes.Checked, "fa fa-star"];
  return (
    <div className={classes.Testimonial}>
      <h5>Maria Spune: </h5>
      <p>
        "Produsele sunt absolut superbe. Calitatea este una foarte mare iar
        culorile folosite sunt de cea mai buna calitate"
      </p>
      <div className={classes.Rating}>
        <h5>Rating</h5>
        <span className={style.join(" ")}></span>
        <span className={style.join(" ")}></span>
        <span className={style.join(" ")}></span>
        <span className={style.join(" ")}></span>
        <span className={style.join(" ")}></span>
      </div>
    </div>
  );
};
export default testimonial;

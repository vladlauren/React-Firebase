import React from "react";
import classes from "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);
library.add(faInstagram);

const footer = (props) => {
  return (
    <div className={classes.Footer}>
      <p>Copyright by Vlad Andreica</p>
      <p>Puteti sa ne vizitati si pe retelele de socializare: </p>
      <a href="#">
        <FontAwesomeIcon
          className={classes.Facebook}
          icon={["fab", "facebook-f"]}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className={classes.Facebook}
          icon={["fab", "instagram"]}
        />
      </a>
    </div>
  );
};

export default footer;

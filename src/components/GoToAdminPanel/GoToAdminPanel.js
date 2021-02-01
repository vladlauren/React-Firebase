import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkUserIsAdmin } from "../../Utils/utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});
const goToAdminPanel = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);

  if (currentUser) {
    console.log(currentUser);
  }
  console.log(isAdmin);

  if (!isAdmin) return null;
  return (
    <div>
      <ul>
        <li>
          <Link to="/Admin">MyAdmin</Link>
        </li>
      </ul>
    </div>
  );
};

export default goToAdminPanel;

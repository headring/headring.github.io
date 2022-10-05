import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

PrivateRoute.defaultProps = {
  location: "",
};

export default PrivateRoute;

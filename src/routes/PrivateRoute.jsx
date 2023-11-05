import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading || user) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;

};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

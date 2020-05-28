import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../services/authService";

const ProtectedRoute = ({ render, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                  dato: "prueba",
                },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;

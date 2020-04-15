import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../context";
export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <nav>
      <h1>Firebase Auth</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
          {state.user.uid ? (
            <li>
            <button onClick={() => dispatch({ type: "USER_LOGGED_OUT" })}>
              Log Out
            </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
      </ul>
    </nav>
  );
};

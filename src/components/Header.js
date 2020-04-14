import React, { useContext } from "react";
import { LinkNav } from "react-router-dom";
import Context from "../context";
export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <nav>
      <h1>Firebase Auth</h1>
      <ul>
        <li>
          <LinkNav to="/home">Home</LinkNav>
        </li>
        <li>
          <LinkNav to="/profile">Profile</LinkNav>
        </li>
        <li>
          {state.user.uid ? (
            <button onClick={() => dispatch({ type: "USER_LOGGED_OUT" })}>
              Log Out
            </button>
          ) : (
            <li>
              <LinkNav to="/login">Login</LinkNav>
            </li>
          )}
        </li>
      </ul>
    </nav>
  );
};

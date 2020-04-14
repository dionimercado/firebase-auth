import React, { useEffect, useContext } from "react";
import Context from "../context";

export default ({ history }) => {
  const { state } = useContext(Context);

  useEffect(() => {
    if (state.user.uid) {
      return history.push("/profile");
    }
  });

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

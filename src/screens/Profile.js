import React, { useEffect, useContext } from "react";
import Context from "../context";

export default ({ history }) => {
  const { state } = useContext(Context);

  useEffect(() => {
    if (!state.user.uid) {
      return history.push("/");
    }
  });

  return (
    <div>
      <h1>Profile Route</h1>
    </div>
  );
};

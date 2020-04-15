import React, {  useContext } from "react";
import Context from "../context";

export default ({ history }) => {
  const { state } = useContext(Context);



  if(!state.user.uid){
    return (
      <div>
  
        <h1>Unauthorized</h1>
        <button onClick={() => history.push("/login")}>Please login</button>
      </div>
    );
  }

  return (
    <div>

      <h1>Profile Route</h1>
    </div>
  );
};

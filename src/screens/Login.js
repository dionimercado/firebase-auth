import React, { useState, useEffect, useContext } from "react";
import Context from "../context";
import Firebase from '../firebase'

export default ({ history }) => {
  const [credentials, setCredentials] = useState({email: "user@gmail.com", password: "password"})
  const [errors, setErrors] = useState({})
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (state.user.uid) {
      return history.push("/profile");
    }
  });

  const handleChange = e=> {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const submit = async e => {
    e.preventDefault();

    const errors = validate();

    if(Object.keys(errors).length > 0) {
      setErrors(errors);
    }else{
      try{
        const {email, password} = credentials;

        const user = await Firebase.signInWithEmailAndPassword(email, password);
      // dispatch({type: "USER_LOGGED_IN", payload: {uid: "abc123"}})
      console.log({user})
  
      }catch(ex) {
        setErrors({global: ex.message})
      }
    }
    
    

  }

  const validate = () => {
    const errors = {}
    if(!credentials.email) {
      errors.email = 'Must enter a valid email'
    }
    if(!credentials.password) {
      errors.password = 'Must enter your password'
    }

    return errors;
  }


  return (
    <div>
      <form onSubmit={submit}>
        <h1>Login</h1>
        {errors.global && (<div className="error">{errors.global}</div>)} 

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange}/>
          {errors.email && (<small>{errors.email}</small>)} 
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange} />
          {errors.password && (<small>{errors.password}</small>)} 

        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

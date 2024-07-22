import React, { useState } from 'react';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../Utility/fireBase';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(email,password);
  const authHandler =(e)=>{

  }
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/014/018/563/small/amazon-logo-on-transparent-background-free-vector.jpg"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onClick={(e)=>setEmail(e.target.value)} type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onClick={(e)=>setPassword(e.target.value)} type="password" id="password" />
          </div>

          <button type='submit' onClick={authHandler} className={classes.login_sign}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button type='submit' onClick={authHandler} className={classes.login_register}>Create your Amazon account</button>
      </div>
    </section>
  );
}

export default Auth;
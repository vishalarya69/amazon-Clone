import React from 'react'

import "./Signin.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className='Container'>
    <div className='logo-containerv'>
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG1.png' alt="amazon logo"></img>
    </div>
    <div className="login__container">
    <h1>Sign-in</h1>
    <form>
      <h5>Email or mobile phone number</h5>
      <input
          type="email"
          name="Email"
          placeholder="Email or mobile phone number"
          autoComplete="off"
          required
          />
          <h5>Password</h5>
          <input
            type="password"
            name="setPassword"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            autoComplete="off"
            className="login__signInButton"
          >
            continue
          </button>
          <p>
          By continuing, you agree to <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Amazon's Conditions of Use  </a> 
          and <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380'> Privacy Notice.</a>
        </p>
    </form>
    </div>
    <h5 className='New-account-container'>New to Amazon?</h5>
    <div>
      <Link to="/Signup">
    <button className= "create-account">
    Create a New Account
</button>
</Link>
</div>
   </div>
   
  )
}

export default Login
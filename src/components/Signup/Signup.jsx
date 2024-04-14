import React from 'react'
import"./Signup.css"

const Signup = () => {
  
  return (
    <div className='signup-container'>
     <div className='logo-containeri'>
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG1.png'></img>
     </div>
     <div className='Signup__container'>
     <h1>Create Account</h1>
     <form>
     <h5>Your Name</h5>
     <input
     type="name"
     name="name"
     placeholder="Your Name "
     autoComplete="off"
     required
     
     />
      <h5>Mobile Number</h5>
    <div class="mobile-number-container">
      
  <input type="tel" className="mobileNumber-1" value="+91" />
  <input type="tel" id="mobileNumber"  
  required
   />
   
   </div>
   <h5>Password</h5>
          <input
            type="password"
            name="setPassword"
            placeholder="Password"
            required
          />
<p>Passwords must be at least 6 characters.</p>
<p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
        <button
            type="submit"
            autoComplete="off"
            className="create_signupButton"
          >
            Verify Mobile Number
          </button> 
          <p>Already have an account? <a href='/Login'>Sign In</a></p>
          <p>
          By continuing, you agree to <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Amazon's Conditions of Use  </a> 
          and <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380'> Privacy Notice.</a>
        </p>  
     </form>

     </div>
    </div>
  )
}

export default Signup
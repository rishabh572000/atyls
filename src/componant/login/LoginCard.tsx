import React from 'react'
import OButton from '../shared/OButton'

function LoginCard() {
  return (
    <div className='login-card'>
        <div className='heading'>
          <p>WELCOME BACK</p>
          <h3>Login into your account</h3>
        </div>
        <form>
          <div className='input-group'>
            <label htmlFor="email">Email or UserName</label>
            <br />
            <input type='text' id="email" name="email" placeholder='Enter your email or username' /> 
          </div>
          <div className='input-group'>
            <span>
            <label htmlFor="password">Password</label>
            <label>Forget password?</label>
            </span>
            <br />
            <input type='password' id="password" name="password" placeholder='Enter your password' /> 
          </div>
          <div className='login'>
            <OButton />
          </div>
          <p className='not-registered'>Not registered yet? Registered</p>
        </form>
      
    </div>
  )
}

export default LoginCard
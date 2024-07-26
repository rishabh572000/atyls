import React from 'react'

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
            <label htmlFor="password">Password</label>
            <label>Forget password?</label>
            <br />
            <input type='password' id="password" name="password" placeholder='Enter your password' /> 
          </div>
          <div className='login'>

          </div>
          <p>Not registered yet? Registered</p>
        </form>
      
    </div>
  )
}

export default LoginCard
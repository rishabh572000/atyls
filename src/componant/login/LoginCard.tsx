import React from 'react'
import OButton from '../shared/OButton'
import { RxCrossCircled } from "react-icons/rx";

interface CardProps{
  setAuthModal?: (open: boolean) => void;
}

const LoginCard: React.FC<CardProps> = ({setAuthModal}) => {
  return (
    <div className='login-card'>
       <span className='cross-icon' onClick={()=>setAuthModal?.(false)}><RxCrossCircled /></span>
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
            <OButton label='Login now' />
          </div>
          <p className='not-registered'>Not registered yet? Registered</p>
        </form>
      
    </div>
  )
}

export default LoginCard
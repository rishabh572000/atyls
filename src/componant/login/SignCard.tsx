import React from 'react'
import OButton from '../shared/OButton'
import { RxCrossCircled } from "react-icons/rx";

interface CardProps{
  setAuthModal: (open: boolean) => void;
}
const SignCard: React.FC<CardProps> = ({setAuthModal}) => {
  return (
    <div className='login-card'>
       <span className='cross-icon' onClick={()=>setAuthModal(false)}><RxCrossCircled /></span>
        <div className='heading'>
          <p>SIGN UP</p>
          <h3>Create an account to continue</h3>
        </div>
        <form>
          <div className='input-group'>
            <label htmlFor="email">Email or UserName</label>
            <br />
            <input type='text' id="email" name="email" placeholder='Enter your email or username' /> 
          </div>
          <div className='input-group'>
            <label htmlFor="userName">Username</label>
            <br />
            <input type='text' id="userName" name="userName" placeholder='Choose a perfected username' /> 
          </div>
          <div className='input-group'>
            <span>
            <label htmlFor="password">Password</label>
            </span>
            <br />
            <input type='password' id="password" name="password" placeholder='Enter your password' /> 
          </div>
          <div className='login'>
            <OButton label='Continue' />
          </div>
          <p className='not-registered'>Already have an account? Login →</p>
        </form>
      
    </div>
  )
}

export default SignCard
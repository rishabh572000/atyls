import React, { useState } from 'react'
import OButton from '../shared/OButton'
import { RxCrossCircled } from "react-icons/rx";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

interface CardProps{
  setAuthModal?: (open: boolean) => void;
}

const LoginCard: React.FC<CardProps> = ({setAuthModal}) => {
  const location = useLocation();
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const isModal = ['/', '/login'].includes(location.pathname)

  const handleLogin = () =>{
    if(formData.email==='Rishabh572000' && formData.password==='Atlys'){
      sessionStorage.setItem('auth', JSON.stringify(formData));
      login()
    }
    navigate('/comment')
  }

  return (
    <div className='login-card'>
       {!isModal && <span className='cross-icon' onClick={()=>setAuthModal?.(false)}><RxCrossCircled /></span>}
        <div className='heading'>
          <p>WELCOME BACK</p>
          <h3>Login into your account</h3>
        </div>
        <form>
          <div className='input-group'>
            <label htmlFor="email">Email or UserName</label>
            <br />
            <input type='text' id="email" name="email" placeholder='Enter your email or username' value={formData?.email} onChange={(e)=>setFormData((pre)=>({...pre, email:e.target.value}))} /> 
          </div>
          <div className='input-group'>
            <span>
            <label htmlFor="password">Password</label>
            <label>Forget password?</label>
            </span>
            <br />
            <input type='password' id="password" name="password" placeholder='Enter your password' value={formData?.password} onChange={(e)=>setFormData((pre)=>({...pre, password:e.target.value}))} /> 
          </div>
          <div className='login'>
            <OButton label='Login now' onClick={()=>handleLogin()}  />
          </div>
          <p className='not-registered' onClick={()=>navigate('/sign-up')}  >Not registered yet? Registered</p>
        </form>
      
    </div>
  )
}

export default LoginCard
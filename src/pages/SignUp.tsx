import React, { useEffect } from 'react'
import SignCard from '../componant/login/SignCard'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

function SignUp() {
  const navigate= useNavigate()
  const { isAuthenticated } = useAppContext();

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/comment')
    } 
  }, [isAuthenticated])

  return (
    <div className='container'>
        <div className='login-logo'>
        </div>
            <SignCard />
    </div>
  )
}

export default SignUp
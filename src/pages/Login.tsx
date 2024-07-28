import React, { useEffect, useState } from 'react'
import LoginCard from '../componant/login/LoginCard'
import OModal from '../componant/shared/OModal'
import { RxCrossCircled } from 'react-icons/rx'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate= useNavigate()
  const [isModal, setIsModal] = useState(false)
  const { isAuthenticated } = useAppContext();
  console.log(isAuthenticated, 'isAuthenticated')

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/comment')
      return
    } 
    setIsModal(true) 
  }, [isAuthenticated])
  return (
    <div className='container'>
        <div className='login-logo'>
        </div>
            <LoginCard />

            {isModal && <OModal>
            <div className='login-card'>
            <span className='cross-icon' onClick={()=>setIsModal?.(false)}><RxCrossCircled /></span>
              User name: Rishabh572000
              <br />
              Password : Atlys
              <br />
              Note: Without filling form you may still access comment route
            </div>
            </OModal>}
    </div>
  )
}

export default Login
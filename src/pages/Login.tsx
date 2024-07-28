import React, { useEffect, useState } from 'react'
import LoginCard from '../componant/login/LoginCard'
import OModal from '../componant/shared/OModal'
import { RxCrossCircled } from 'react-icons/rx'

function Login() {
  const [isModal, setIsModal] = useState(false)

  useEffect(()=>{
    setIsModal(true)
  }, [])
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
import React from 'react'

interface ModalProps {
    children?:React.ReactNode
}
const OModal:React.FC<ModalProps> = ({children}) =>{
  return (
    <div className='modal'>
       
        {children}
    </div>
  )
}

export default OModal
import React, { useState } from 'react'
import OButton from '../shared/OButton'
import OModal from '../shared/OModal'
import SignCard from '../login/SignCard'
import { useAppContext } from '../../context/appContext';

function PostComment() {
  const { isAuthenticated } = useAppContext();
  const [openAutModal, setAuthModal] = useState(false)

  const handlePost = () =>{
    if(!isAuthenticated){
      setAuthModal(!openAutModal)
    }
  }

  return (
    <div className='comment-card'>
      <form>
        <label htmlFor='postComment'>Create post</label>
        <br />
        <textarea name='postComment' placeholder='How are you filling today?'>

        </textarea>
        <div className='button-position'>
          <div className='button-size'>
            <OButton label='Post' onClick={()=>handlePost()} />
          </div>
        </div>
      </form>
      {openAutModal && <OModal>
        <SignCard setAuthModal={setAuthModal} />
      </OModal>}

    </div>
  )
}

export default PostComment
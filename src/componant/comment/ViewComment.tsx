import React from 'react'
import { RxDotsHorizontal } from "react-icons/rx";
import { TiMessage } from "react-icons/ti";
import Icon from '../shared/Icon';


function ViewComment() {
  return (
    <div className='comment-card'>
      <div className='profile-info'>
        <div className='left'>
          <img src='/media/images/profile2.jpg' alt='profile'/>
          <span>
            <div className='name'>Theresa Webb</div>
            <div className='time'>5min ago</div>
          </span>
        </div>
        <div className='right'>
        <RxDotsHorizontal />
        </div>
      </div>

      <div className='comment-view'>
        <span>
      <Icon library="fa" name="FaBeer" size={20} color="orange" />
      </span>
          <div className='comment'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
      </div>

      <div className='comment-count'> <TiMessage  size={20} /> 24 comments</div>
      
    </div>
  )
}

export default ViewComment
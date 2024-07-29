import React, { useEffect } from 'react'
import { RxDotsHorizontal } from "react-icons/rx";
import { TiMessage } from "react-icons/ti";
import Icon from '../shared/Icon';
import { postCommentData } from '../../utils/constant';


function ViewComment() {


  return (
    <>
      {postCommentData?.map((val, ind) => (<div className='comment-card' key={ind}>
        <div className='profile-info'>
          <div className='left'>
            <img src={`/media/images/${val?.image}`} alt='profile' />
            <span>
              <div className='name'>{val?.name}</div>
              <div className='time'>{val?.time}</div>
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
          <div className='comment'>{val?.text}</div>
        </div>

        <div className='comment-count'> <TiMessage size={20} /> {val?.comments} comments</div>

      </div>))}
    </>

  )
}

export default ViewComment
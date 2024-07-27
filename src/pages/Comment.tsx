import React from 'react'
import PostComment from '../componant/comment/PostComment'
import '../styles/comment.scss'
import ViewComment from '../componant/comment/ViewComment'

function Comment() {
  return (
    <div className='container'>
        <div className='comment-heading'>
            <h3>Hello Jane</h3>
            <p>How are you doing today? Would you like to share something with the community 🤗</p>
        </div>
        <div className='comment-item'>
            <PostComment />

            <ViewComment />
        </div>
    </div>
  )
}

export default Comment
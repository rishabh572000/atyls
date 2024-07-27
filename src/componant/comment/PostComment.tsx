import React from 'react'
import OButton from '../shared/OButton'

function PostComment() {
  return (
    <div className='comment-card'>
      <form>
        <label htmlFor='postComment'>Create post</label>
        <br />
        <textarea name='postComment' placeholder='How are you filling today?'>

        </textarea>
        <div className='button-position'>
          <div className='button-size'>
            <OButton />
          </div>
        </div>
      </form>

    </div>
  )
}

export default PostComment
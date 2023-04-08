import './Feed.css'
import Share from '../Share/Share'
import Post from '../post/Post'
import { Posts } from '../../dummyData'

function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed

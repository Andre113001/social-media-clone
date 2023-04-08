import './Post.css'
import { MoreVert, ThumbUpAlt, Favorite, FavoriteBorderRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Users } from "../../dummyData"
import { useState } from 'react'

function Post({post}) { 
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className='post-profile-img' src={Users.filter((u) => u.id === post.userId)[0].profileImg} alt="" />
                        <span className="post-profile-name">
                            {Users.filter((u) => u.id === post.userId)[0].profileName}
                        </span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className='post-top-more' />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        {post?.desc}
                    </span>
                    <img className='post-img' src={post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <IconButton className='post-like-icon' onClick={likeHandler}>
                            {isLiked ?  <Favorite htmlColor='red'/> : <FavoriteBorderRounded htmlColor='grey'/> }
                        </IconButton>
                        {/* <{isLiked ? } className='post-like-icon' onClick={likeHandler} htmlColor='grey'/> */}
                        <span className="post-like-counter">{like} people like this</span>
                    </div>

                    <div className="post-bottom-right">
                        <span className="post-comment-text">
                            {post.comments} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

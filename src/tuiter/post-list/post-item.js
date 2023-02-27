import React from 'react'
import './index.css'

const PostItem = ({post}) => {
    return (
        <div className="wd-content">
            <div className="wd-avatar">
                <img height="48px" width="48px" src={post.profilePicture} alt={post.userName} />
            </div>
            <div className="wd-inner-content">
                <div className="wd-name">
                    <p>{post.userName} <i className="fas fa-check-circle"></i> <span>@{post.handle} . {post.time}</span></p>
                    <p>...</p>
                </div>
                <p>{post.tweetText}</p>

                <div className="wd-image-box">
                    <img src={post.image} width="100%" height="100%" alt={post.userName}
                        style={!post.title? 
                            {'borderBottomLeftRadius': '25px',
                             'borderBottomRightRadius': '25px'
                            }
                            :{}
                        } 
                    />

                    {(post.title && post.text && post.website) ? 
                        <div>
                            <p className="wd-image-box-title">{post.title}</p>
                            <p className="wd-image-box-content">{post.text}</p>
                            <p className="wd-image-box-content"><i className="fas fa-link"></i> {post.website}</p>
                        </div>
                    : <></>}
                </div>
                <div className="wd-icons">
                    <a href="#"><i className="far fa-comment"></i><span>{post.comments}</span></a>
                    <a href="#"><i className="fas fa-retweet"></i><span>{post.retweets}</span></a>
                    <a href="#"><i className="far fa-heart"></i><span>{post.likes}</span></a>
                    <a href="#"><i className="fas fa-arrow-up"></i></a>
                </div>
            </div>
        </div>
    )
}

export default PostItem
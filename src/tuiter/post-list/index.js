import React from 'react'
import PostItem from './post-item'
import posts from './posts.json'

const PostList = () => {
  return (
    <>
        {posts.map(post => <PostItem key={post._id} post={post} />)}
    </>
  )
}

export default PostList
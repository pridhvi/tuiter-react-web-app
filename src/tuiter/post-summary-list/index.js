import React from 'react'
import PostSummaryItem from './post-summary-item'
import posts from './posts.json'

const PostSummaryList = () => {
    return (
        <>
            {posts.map(post => <PostSummaryItem key={post._id} post={post} />)}
        </>
    )
}

export default PostSummaryList
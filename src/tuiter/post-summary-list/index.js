import React from 'react'
import PostSummaryItem from './post-summary-item'
import { useSelector } from 'react-redux'

const PostSummaryList = () => {

    const posts = useSelector(state => state.tuits)

    return (
        <>
            {posts.map(post => <PostSummaryItem key={post._id} post={post} />)}
        </>
    )
}

export default PostSummaryList
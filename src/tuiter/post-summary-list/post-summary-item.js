import React from 'react'

const PostSummaryItem = ({post}) => {
    return (
        <div className="container row bg-gray me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
            <div className="col-10">
                <span className="d-block text-muted">{post.topic}</span>
                <span className="fw-bold text-white">{post.userName} <i className="fas fa-check-circle"></i> <span
                    className="text-muted fw-normal">- {post.time}</span></span>
                <span className="d-block fw-bold text-white">{post.title}</span>
            </div>
            <div className="col-2 pt-2 pb-2">
                <img src={post.image} width="100%" className="rounded bg-white" alt="post logo" />
            </div>
        </div>
    )
}

export default PostSummaryItem
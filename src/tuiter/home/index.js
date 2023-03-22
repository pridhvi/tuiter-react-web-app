import React from 'react'
import PostSummaryList from '../post-summary-list'
import PostList from '../post-list'
// import '../post-list/index.css'

const HomeComponent = () => {
    return (
        <>
            <div className="container wd-post-list col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList />
            </div>

            <div className="container d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList />
            </div>
        </>
    )
}

export default HomeComponent
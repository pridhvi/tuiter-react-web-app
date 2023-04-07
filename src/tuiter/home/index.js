import React from 'react'
import TuitsList from '../tuits'
import WhoToFollowList from '../who-to-follow-list'
import WhatsHappening from './whats-happening'

const HomeComponent = () => {
    return (
        <>
            <div className="container wd-post-list col-10 col-md-10 col-lg-7 col-xl-6">
                <WhatsHappening />
                <TuitsList />
            </div>

            <WhoToFollowList />
        </>
    )
}

export default HomeComponent
import React from 'react'
import WhoToFollowListItem from './who-to-follow-list-item'
import { useSelector } from 'react-redux'

const WhoToFollowList = () => {

    const who = useSelector(state => state.who)

    return (
        <div className="container d-none d-lg-block col-lg-4 col-xl-4">
            <div className="container row bg-gray rounded-top me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
                <span className="fw-bold text-white">Who to follow</span>
            </div>

            {who.map(who => <WhoToFollowListItem key={who._id} who={who}/>)}

        </div>
    )
}

export default WhoToFollowList
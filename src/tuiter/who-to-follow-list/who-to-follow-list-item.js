import React from 'react'

const WhoToFollowListItem = ({ who }) => {
    return (
        <div className="container row bg-gray me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
            <div className="col-lg-2">
                <img src={who.avatarIcon} width="100%" alt='profile-dp' />
            </div>
            <div className="col-lg-7">
                <span className="d-block fw-bold text-white">{who.userName} <i className="fas fa-check-circle"></i></span>
                <span className="d-block text-white">@{who.handle}</span>
            </div>
            <div className="col-lg-3 text-white d-flex align-items-center justify-content-center">
                <span className="pt-1 pb-1 ps-3 pe-3 bg-tuiter rounded-pill">Follow</span>
            </div>
        </div>
    )
}

export default WhoToFollowListItem
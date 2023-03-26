import React from 'react'
import WhoToFollowList from '../who-to-follow-list'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile)

    return (
        <>
            <div className="container wd-post-list col-10 col-md-10 col-lg-7 col-xl-6 text-white">
                <div className='container row mb-2'>
                    <Link to="/tuiter/home" className="col-1 fas fa-arrow-left fa-2x d-flex align-items-center text-decoration-none text-white"></Link>
                    <div className="col-11 d-inline">
                        <h5 className='mb-0'>{profile.firstName} {profile.lastName}</h5>
                        <small className='wd-text-gray'>6,114 Tweets</small>
                    </div>
                </div>


                <img height="200px" width="100%" src={profile.bannerPicture} alt="banner" />

                <div className='container mb-5'>
                    <img className='rounded-circle position-absolute translate-middle-y border border-4 border-dark' height="130px" width="130px" src={profile.profilePicture} alt="dp" />
                    <Link to="/tuiter/edit-profile">
                        <span className="float-end mt-3 pt-1 pb-1 ps-3 pe-3 rounded-pill text-white border">Edit Profile</span>
                    </Link>
                </div>

                <div className='container pt-4 mb-2'>
                    <h5 className='mb-0 fw-bold'>{profile.firstName} {profile.lastName}</h5>
                    <small className='wd-text-gray'>{profile.handle}</small>
                    <p>{profile.bio}</p>
                </div>

                <div className='container mb-2 wd-text-gray'>
                    <i className="far fa-map-marker-alt"></i>
                    <small className='me-4 ps-2'>{profile.location}</small>
                    <i className="fas fa-birthday-cake"></i>
                    <small className='me-4 ps-2'>Born {profile.dateOfBirth}</small>
                    <i className="far fa-calendar-alt"></i>
                    <small className='me-4 ps-2'>Joined {profile.dateJoined}</small>
                </div>

                <div className='container mb-2 wd-text-gray'>
                    <span>{profile.followingCount}</span>
                    <small className='me-4 ps-2'>Following</small>
                    <span>{profile.followersCount}</span>
                    <small className='me-4 ps-2'>Followers</small>
                </div>
            </div>

            <WhoToFollowList />
        </>
    )
}

export default ProfileComponent
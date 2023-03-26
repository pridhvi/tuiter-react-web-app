import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import WhoToFollowList from '../who-to-follow-list'
import { updateProfile } from '../reducers/profile-reducer'
import './index.css'

const EditProfile = () => {

    const profile = useSelector(state => state.profile)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNameChange = (e) => {
        const newFirstName = e.target.value.split(" ")[0]
        const newLastName = e.target.value.split(" ")[1]
        setFirstName(newFirstName)
        setLastName(newLastName)
    }

    const handleBioChange = (e) => {
        const newBio = e.target.value
        setBio(newBio)
    }

    const handleLocationChange = (e) => {
        const newLocation = e.target.value
        setLocation(newLocation)
    }

    const handleWebsiteChange = (e) => {
        const newWebsite = e.target.value
        setWebsite(newWebsite)
    }

    const handleDateOfBirthChange = (e) => {
        const newDateOfBirth = e.target.value
        setDateOfBirth(newDateOfBirth)
    }

    const saveProfileHandler = async () => {
        const newProfile = {
            firstName,
            lastName,
            bio,
            location,
            website,
            dateOfBirth
        }
        await dispatch(updateProfile(newProfile))
        navigate("/tuiter/profile")
    };

    return (
        <>
            <div className="container wd-post-list col-10 col-md-10 col-lg-7 col-xl-6 text-white">

                <div className='container pt-3'>
                    <Link to="/tuiter/profile">
                        <i className="text-white bi bi-x-lg"></i>
                    </Link>
                    <span className='ms-5 fw-bold'>Edit Profile</span>
                    <Link onClick={saveProfileHandler}>
                        <span className="float-end ps-3 pe-3 bg-white rounded-pill text-black border">Save</span>
                    </Link>
                </div>

                <Link className='wd-banner-edit'>
                    <i className="fas fa-camera fa-2x text-black border border-5 border-white bg-white rounded-circle opacity-50"></i>
                    <i className="fas fa-times fa-2x text-black border border-5 border-white bg-white rounded-circle opacity-50"></i>
                    
                    <img className='opacity-50' height="200px" width="100%" src={profile.bannerPicture} alt="banner" />
                </Link>

                <Link className='ms-3 wd-profile-edit'>
                    <img className='rounded-circle position-absolute translate-middle-y border border-4 border-dark opacity-50'
                        height="130px" width="130px" src={profile.profilePicture} alt="dp" />

                    <i className="fas fa-camera fa-2x text-black border border-5 border-white bg-white rounded-circle opacity-50"></i>
                </Link>



                <div className='container pt-5'>
                    <div className="form-floating mb-4">
                        <textarea className="form-control bg-black text-white"
                            onChange={handleNameChange}
                            value={`${firstName} ${lastName}`} id="name"></textarea>
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control bg-black text-white"
                            onChange={handleBioChange}
                            value={bio} id="bio" rows="10" style={{ height: "100%" }}></textarea>
                        <label htmlFor="bio">Bio</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control bg-black text-white"
                            onChange={handleLocationChange}
                            value={location} id="location"></textarea>
                        <label htmlFor="location">Location</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control bg-black text-white"
                            onChange={handleWebsiteChange}
                            value={website} id="website"></textarea>
                        <label htmlFor="website">Website</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control bg-black text-white"
                            onChange={handleDateOfBirthChange}
                            value={dateOfBirth} id="dob"></textarea>
                        <label htmlFor="dob">Birth date</label>
                    </div>

                    <div className='container mb-4'>
                        <span>Switch to Professional</span>
                        <i className="float-end fas fa-chevron-right d-flex align-items-center"></i>
                    </div>
                </div>
            </div>
            <WhoToFollowList />
        </>
    )
}

export default EditProfile
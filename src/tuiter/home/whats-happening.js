import React, { useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { createTuit } from '../tuits/tuits-reducer'
import { Link } from 'react-router-dom'

const WhatsHappening = () => {

    const [whatsHappening, setWhatsHappening] = useState("")
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
        }
        dispatch(createTuit(newTuit))
        setWhatsHappening("")
    }
    return (
        <div className="row wd-whats-happening pb-4">
            <div className="col-auto">
                <Link to="/tuiter/profile">
                <img className="rounded-circle" src={profile.profilePicture} height="52px" width="52px" alt="logo" />
                </Link>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0 bg-black wd-border-ta text-white"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary bg-tuiter float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-tuiter fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            {/* <div className="col-12"><hr /></div> */}
        </div>
    );
}
export default WhatsHappening;
import React from 'react'
import './index.css'
import TuitStats from './tuit-stats'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTuitThunk } from '../../services/tuits-thunks'

const TuitItem = ({ tuit }) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return (
        <div className="wd-content">
            <div className="wd-avatar">
                <img height="48px" width="48px" src={tuit.profilePicture} alt={tuit.userName} />
            </div>
            <div className="wd-inner-content mb-3">
                <div className="wd-name">
                    <p>{tuit.userName} <i className="fas fa-check-circle text-primary"></i> <span>{tuit.handle} . {tuit.time}</span></p>
                    <Link>
                        <i className="text-white bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </Link>
                </div>
                <p>{tuit.tweetText}</p>

                <div className="text-white">
                    <p>{tuit.tuit}</p>
                </div>

                <TuitStats tuit={tuit} />
            </div>
        </div>
    )
}

export default TuitItem
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateTuitThunk } from '../../services/tuits-thunks'

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch()
    return (
        <div className="wd-icons">
            <Link to="#"><i className="far fa-comment"></i><span>{tuit.replies}</span></Link>
            <Link to="#"><i className="fas fa-retweet"></i><span>{tuit.retuits}</span></Link>
            <Link to="#">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                }))}
                    className={`${tuit.liked ? 'fas text-danger' : 'far'} fa-heart`}></i>
                <span>{tuit.likes}</span>
            </Link>
            <Link to="#"><i className="far fa-share-alt"></i></Link>
        </div>
    )
}

export default TuitStats
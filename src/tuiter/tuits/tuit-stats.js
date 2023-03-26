import React from 'react'
import { Link } from 'react-router-dom'

const TuitStats = ({tuit}) => {
    return (
        <div className="wd-icons">
            <Link to="#"><i className="far fa-comment"></i><span>{tuit.replies}</span></Link>
            <Link to="#"><i className="fas fa-retweet"></i><span>{tuit.retuits}</span></Link>
            <Link to="#">
                <i className={`${tuit.liked ? 'fas text-danger': 'far'} fa-heart`}></i>
                <span>{tuit.likes}</span>
            </Link>
            <Link to="#"><i className="far fa-share-alt"></i></Link>
        </div>
    )
}

export default TuitStats
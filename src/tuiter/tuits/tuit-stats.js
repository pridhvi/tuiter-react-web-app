import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateTuitThunk } from '../../services/tuits-thunks'

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch()
    const likeClickHandler = () => dispatch(updateTuitThunk(
        tuit.liked ?
            {
                ...tuit,
                likes: tuit.likes - 1,
                liked: false
            }
            :
            {
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            }
    ))

    const dislikeClickHandler = () => dispatch(updateTuitThunk(
        tuit.disliked ?
            {
                ...tuit,
                dislikes: tuit.dislikes - 1,
                disliked: false
            }
            :
            {
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            }
    ))

    return (
        <div className="wd-icons">
            <Link to="#"><i className="far fa-comment"></i><span>{tuit.replies}</span></Link>
            <Link to="#"><i className="fas fa-retweet"></i><span>{tuit.retuits}</span></Link>
            <Link to="#">
                <i onClick={likeClickHandler}
                    className={`${tuit.liked ? 'fas text-danger' : 'far'} fa-heart`}></i>
                <span>{tuit.likes}</span>
            </Link>
            <Link to="#">
                <i onClick={dislikeClickHandler}
                    className={`${tuit.disliked ? 'fas text-white' : 'far'} fa-thumbs-down`}></i>
                <span>{tuit.dislikes}</span>
            </Link>
            <Link to="#"><i className="far fa-share-alt"></i></Link>
        </div>
    )
}

export default TuitStats
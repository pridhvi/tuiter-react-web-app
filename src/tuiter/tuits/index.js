import React, { useEffect } from 'react'
import TuitItem from './tuit-item'
import { useDispatch, useSelector } from 'react-redux'
import { findTuitsThunk } from '../../services/tuits-thunks'

const TuitsList = () => {

    const { tuits, loading } = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return (
        <>
            {
                loading &&
                // <li className="list-group-item">
                    <p className='text-white'>Loading...</p>
                // </li>
            }

            {tuits.map(post => <TuitItem key={post._id} tuit={post} />)}
        </>
    )
}

export default TuitsList
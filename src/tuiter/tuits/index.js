import React, { useEffect } from 'react'
import TuitItem from './tuit-item'
import { useDispatch, useSelector } from 'react-redux'
import { findTuitsThunk } from '../../services/tuits-thunks'

const TuitsList = () => {

    const { tuits, loading } = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line
    }, [])

    var toTimeString = secs => {
        var days, hours, minutes, seconds, timeString;

        if (secs == null)
            return "";

        days = (secs / 86400) >> 0;
        hours = (secs % 86400 / 3600) >> 0;
        minutes = (secs % 3600 / 60) >> 0;
        seconds = (secs % 60);

        timeString = days === 0 ? (hours === 0 ? (minutes === 0 ? (seconds + " seconds"): minutes + "m") : hours + "h") : days + "d";
        return timeString;
    };


    return (
        <>
            {
                loading && <p className='text-white'>Loading...</p>
            }

            {tuits.map(tuit => {
                const tuitTime = toTimeString((new Date((new Date()).getTime() - tuit.time))/1000);
                
                return <TuitItem key={tuit._id} tuit={tuit} tuitTime={tuitTime} />
            })}
        </>
    )
}

export default TuitsList
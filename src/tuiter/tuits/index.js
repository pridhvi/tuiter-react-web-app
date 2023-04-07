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

    var toTimeString = tuitTime => {
        const tuitTimeDiff = new Date((new Date()).getTime() - tuitTime)
        const tuitTimeDiffSecs = tuitTimeDiff / 1000
        var days, hours, minutes, timeString;

        if (tuitTimeDiff == null)
            return "";

        days = (tuitTimeDiffSecs / 86400) >> 0;
        hours = (tuitTimeDiffSecs % 86400 / 3600) >> 0;
        minutes = (tuitTimeDiffSecs % 3600 / 60) >> 0;
        // seconds = (secs % 60);
        const dateStringArray = (new Date(tuitTime)).toString().split(' ')

        timeString = days === 0 ? (hours === 0 ? (minutes === 0 ? "less than a minute ago": minutes + "m") : hours + "h") 
                                : dateStringArray[1] + " " + dateStringArray[2] + ", " + dateStringArray[3];
        return timeString;
    };


    return (
        <>
            {
                loading && <p className='text-white'>Loading...</p>
            }

            {tuits.map(tuit => {
                const tuitTime = toTimeString(tuit.time);
                
                return <TuitItem key={tuit._id} tuit={tuit} tuitTime={tuitTime} />
            })}
        </>
    )
}

export default TuitsList
import React from 'react'
import TuitItem from './tuit-item'
import { useSelector } from 'react-redux'

const TuitsList = () => {

    const posts = useSelector(state => state.tuits)

    return (
        <>
            {posts.map(post => <TuitItem key={post._id} tuit={post} />)}
        </>
    )
}

export default TuitsList
import React from 'react'
import { Link } from 'react-router-dom'
import PostSummaryList from '../post-summary-list'
import TuitsList from '../tuits'
import WhoToFollowList from '../who-to-follow-list'

const ExploreComponent = () => {
    return (
        <>
            <div className="container col-10 col-md-10 col-lg-7 col-xl-6">
                <div className="container row me-0 pe-0">
                    <div className="col-11 mb-2 border rounded-pill bg-white">
                        <i className="fas fa-search custom-pos-search-icon w-10"></i>
                        <input type="text" className="form-control border-0 d-inline w-50" id="search"
                            placeholder="Search Twitter" />
                    </div>
                    <i className="col-1 fas fa-cog fa-2x pt-1 ps-3 text-tuiter"></i>
                </div>

                <ul className="nav nav-tabs mb-2">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="#">For you</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">Trending</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">Sports</Link>
                    </li>
                    <li className="nav-item d-none d-md-inline">
                        <Link className="nav-link text-white" to="#">Entertainment</Link>
                    </li>
                </ul>

                <div className="card border-0">
                    <img src="../../images/starship.jpeg" width="100%" className="card-img border-0" alt='starship' />
                    <div className="card-img-overlay d-flex flex-column justify-content-end text-white pb-0">
                        <h1>SpaceX's Starship</h1>
                    </div>
                </div>

                {/* <PostSummaryList /> */}
                <TuitsList />
            </div>
            <WhoToFollowList />
        </>
    )
}

export default ExploreComponent
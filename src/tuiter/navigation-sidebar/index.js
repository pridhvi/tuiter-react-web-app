import React from 'react'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import './index.css'

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="container col-2 col-md-2 col-lg-1 col-xl-2 custom-pos-navbar">
            <div className="row">
                {/* <Link to="/tuiter/"> */}
                <Link to="/tuiter/" className="col-12 bg-gray rounded-top pt-2 pb-2 text-white text-decoration-none">
                    <i className="fab fa-twitter"></i> <span className="d-none d-xl-inline">Tuiter</span>
                </Link>
                {/* </Link> */}

                <Link to="/tuiter/home"
                    className={`
                        col-12 bg-gray pt-2 pb-2 text-decoration-none text-white ${(active === 'home' || !active) ? 'active' : ''}
                    `}>
                    <div>
                        <i className="fas fa-home"></i> <span className="d-none d-xl-inline">Home</span>
                    </div>
                </Link>

                <Link to="/tuiter/explore"
                    className={`
                        col-12 bg-gray pt-2 pb-2 text-decoration-none text-white ${(active === 'explore') ? 'active' : ''}
                    `}>
                    <div>
                        <i className="fas fa-hashtag"></i> <span className="d-none d-xl-inline">Explore</span>
                    </div>
                </Link>

                <Link to="/" className="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="far fa-asterisk"></i> <span className="d-none d-xl-inline">Labs</span>
                    </div>
                </Link>

                <Link to="#" className="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="fas fa-bell"></i> <span className="d-none d-xl-inline">Notifications</span>
                    </div>
                </Link>

                <Link to="#" className="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="fas fa-envelope"></i> <span className="d-none d-xl-inline">Messages</span>
                    </div>
                </Link>

                <Link to="#" className="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="fas fa-bookmark"></i> <span className="d-none d-xl-inline">Bookmarks</span>
                    </div>
                </Link>

                <Link to="#" className="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="fas fa-list-ul"></i> <span className="d-none d-xl-inline">Lists</span>
                    </div>
                </Link>

                <Link to="/tuiter/profile" className={`col-12 bg-gray pt-2 pb-2 text-decoration-none text-white ${(active === 'profile') ? 'active' : ''}`}>
                    <div>
                        <i className="fas fa-user"></i> <span className="d-none d-xl-inline">Profile</span>
                    </div>
                </Link>

                <Link to="#" className="col-12 bg-gray rounded-bottom pt-2 pb-2 text-decoration-none text-white">
                    <div>
                        <i className="fas fa-ellipsis-h"></i> <span className="d-none d-xl-inline">More</span>
                    </div>
                </Link>

                {/* <div className="col-12 pt-2 pb-2 mt-2 bg-tuiter rounded-pill text-white text-center">
                    <span>Tweet</span>
                </div> */}
            </div>
        </div>
    )
}

export default NavigationSidebar
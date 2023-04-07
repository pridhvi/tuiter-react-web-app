import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import { Routes, Route } from 'react-router';
import HomeComponent from "./home";
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import ProfileComponent from "./profile";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./profile/edit-profile";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    profile: profileReducer,
  }
})

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <NavigationSidebar />
          <Routes>
            <Route index element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/explore" element={<ExploreComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter
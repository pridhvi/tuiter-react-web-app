import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import { Routes, Route } from 'react-router';
import HomeComponent from "./home";
import './index.css'

function Tuiter() {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <NavigationSidebar />
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/explore" element={<ExploreComponent />} />
        </Routes>
      </div>
    </div>
  );
}
export default Tuiter
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <NavigationSidebar active="explore" />

        <ExploreComponent />

        <WhoToFollowList />
      </div>
    </div>
  );
}
export default Tuiter
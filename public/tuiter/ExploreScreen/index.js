import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="container mt-2">
            <div class="row justify-content-center">
                ${NavigationSidebar('explore')}

                ${ExploreComponent()}

                ${WhoToFollowList()}
            </div>
        </div>
    `);
}

$(exploreComponent);
import NavigationSidebar from "../NavigationSidebar/index.js";
// import WhoToFollowList from "../WhoToFollowList/index.js";
// import ExploreComponent from "./ExploreComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
    $('#wd-home').append(`
        <div class="container mt-2">
            <div class="row justify-content-center">
                ${NavigationSidebar('home')}

                <div class="container border-start border-end col-10 col-md-10 col-lg-7 col-xl-6">
                    ${PostList()}
                </div>
                
                <div class="container d-none d-lg-block col-lg-4 col-xl-4">
                    ${PostSummaryList()}
                </div>
            </div>
        </div>
    `);
}

$(homeComponent);
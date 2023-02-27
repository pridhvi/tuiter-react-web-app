import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <div class="container d-none d-lg-block col-lg-4 col-xl-4">
            <div class="container row bg-gray rounded-top me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
                <span class="fw-bold text-white">Who to follow</span>
            </div>

            ${who.map(user => WhoToFollowListItem(user)).join('')}

        </div>
    `);
}

export default WhoToFollowList;
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="container col-10 col-md-10 col-lg-7 col-xl-6">
            <div class="container row me-0 pe-0">
                <div class="col-11 mb-2 border rounded-pill bg-white">
                    <i class="fas fa-search custom-pos-search-icon w-10"></i>
                    <input type="text" class="form-control border-0 d-inline w-50" id="search"
                        placeholder="Search Twitter">
                </div>
                <i class="col-1 fas fa-cog fa-2x pt-1 ps-3 text-primary"></i>
            </div>

            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active text-white" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link text-white" href="#">Entertainment</a>
                </li>
            </ul>

            <div class="card border-0">
                <img src="../../images/starship.jpeg" width="100%" class="card-img border-0">
                <div class="card-img-overlay d-flex flex-column justify-content-end text-white pb-0">
                    <h1>SpaceX's Starship</h1>
                </div>
            </div>

            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;

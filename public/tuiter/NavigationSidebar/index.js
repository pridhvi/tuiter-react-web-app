const NavigationSidebar = (active) => {
    return (`
    <div class="container col-2 col-md-2 col-lg-1 col-xl-2 custom-pos-navbar">
    <div class="row">
        <div class="col-12 bg-gray rounded-top pt-2 pb-2 text-white">
            <i class="fab fa-twitter"></i>
        </div>

        <a href="../HomeScreen/index.html" 
        class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white ${(active === 'home') ? 'active' : ''}">
        <div>
            <i class="fas fa-home"></i> <span class="d-none d-xl-inline">Home</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" 
        class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white ${(active === 'explore') ? 'active' : ''}">
        <div>
            <i class="fas fa-hashtag"></i> <span class="d-none d-xl-inline">Explore</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-bell"></i> <span class="d-none d-xl-inline">Notifications</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-envelope"></i> <span class="d-none d-xl-inline">Messages</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-bookmark"></i> <span class="d-none d-xl-inline">Bookmarks</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-list-ul"></i> <span class="d-none d-xl-inline">Lists</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-user"></i> <span class="d-none d-xl-inline">Profile</span>
        </div>
        </a>

        <a href="../ExploreScreen/index.html" class="col-12 bg-gray rounded-bottom pt-2 pb-2 text-decoration-none text-white">
        <div>
            <i class="fas fa-ellipsis-h"></i> <span class="d-none d-xl-inline">More</span>
        </div>
        </a>

        <div class="col-12 pt-2 pb-2 mt-2 bg-primary rounded-pill text-white text-center">
            <span>Tweet</span>
        </div>
    </div>
</div>
    `);
}
export default NavigationSidebar;
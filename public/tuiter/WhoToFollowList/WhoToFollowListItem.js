const WhoToFollowListItem = (who) => {
    return(`
    <div class="container row bg-gray me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
        <div class="col-lg-2">
            <img src="${who.avatarIcon}" width="100%">
        </div>
        <div class="col-lg-7">
            <span class="d-block fw-bold text-white">${who.userName} <i class="fas fa-check-circle"></i></span>
            <span class="d-block text-white">@${who.handle}</span>
        </div>
        <div class="col-lg-3 text-white d-flex align-items-center justify-content-center">
            <span class="pt-1 pb-1 ps-3 pe-3 bg-primary rounded-pill">Follow</span>
        </div>
    </div>
    `);
};

export default WhoToFollowListItem;
const PostSummaryItem = (post) => {
    return(`
        <div class="container row bg-gray me-0 ms-0 ps-0 pe-0 pt-2 pb-2">
            <div class="col-10">
                <span class="d-block text-muted">${post.topic}</span>
                <span class="fw-bold text-white">${post.userName} <i class="fas fa-check-circle"></i> <span
                        class="text-muted fw-normal">- ${post.time}</span></span>
                <span class="d-block fw-bold text-white">${post.title}</span>
            </div>
            <div class="col-2 pt-2 pb-2">
                <img src="${post.image}" width="100%" class="rounded bg-white">
            </div>
        </div>
    `);
};

export default PostSummaryItem;
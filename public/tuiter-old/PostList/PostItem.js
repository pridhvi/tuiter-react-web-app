const PostItem = (post) => {
    return(`
        <div class="wd-content border-bottom">
            <div class="wd-avatar">
                <img height="48px" width="48px" src="${post.profilePicture}">
            </div>
            <div class="wd-inner-content">
                <div class="wd-name">
                    <p>${post.userName} <i class="fas fa-check-circle"></i> <span>@${post.handle} . ${post.time}</span></p>
                    <p>...</p>
                </div>
                <p>${post.tweetText}</p>

                <div class="wd-image-box">
                    <img src="${post.image}" width="100%" height="100%" 
                    style="${(!post.title)?"border-bottom-left-radius: 25px;border-bottom-right-radius: 25px;":""}">

                    ${(post.title && post.text && post.website)?`
                        <div>
                            <p class="wd-image-box-title">${post.title}</p>
                            <p class="wd-image-box-content">${post.text}</p>
                            <p class="wd-image-box-content"><i class="fas fa-link"></i> ${post.website}</p>
                        </div>
                    `:""}
                </div>
                <div class="wd-icons">
                    <a href="#"><i class="far fa-comment"></i><span>${post.comments}</span></a>
                    <a href="#"><i class="fas fa-retweet"></i><span>${post.retweets}</span></a>
                    <a href="#"><i class="far fa-heart"></i><span>${post.likes}</span></a>
                    <a href="#"><i class="fas fa-arrow-up"></i></a>
                </div>
            </div>
        </div>
    `);
};

export default PostItem;
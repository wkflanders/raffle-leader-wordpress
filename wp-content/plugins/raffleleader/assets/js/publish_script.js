document.addEventListener('previewLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const raffleID = urlParams.get("raffle_id");

    const newPostBtn = document.querySelector('.raffle-post-box');
    const newPageBtn = document.querySelector('.raffle-page-box');
    const insertPostBtn = document.querySelector('.raffle-insert-box');

    newPostBtn.addEventListener('click', ()=>{
        const newPostURL = raffleleader_publish_object.newPostUrl + "?post_type=post";

        window.location.href = newPostURL + '&raffle_id="' + raffleID + '"';
    });
});
function getTweets() {
    return JSON.parse(localStorage.getItem('tweets')) || [];
}

function saveTweets(tweets) {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function deleteTweetHandler(id) {
    const tweets = getTweets();
    const updatedTweets = tweets.filter(tweet => tweet.id !== id);
    saveTweets(updatedTweets);
    renderTweets(updatedTweets);
}

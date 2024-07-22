let tweets_list = [
    { 
        "imageUrl": "resources/images/psit_logo.jpg",
        "title": "PSIT KANPUR",
        "desc": "sample tweet from PSIT"
    },
    {
        "imageUrl": "resources/images/logo2.jpg",
        "title": "X",
        "desc": "another sample tweet from X"
    }
    ];
    function renderTweets(){
        let tweetsHTML = '';
        for (ele of tweets_list){
            tweetsHTML += `
            <div class="tweet">
                <img src="${ele.imageUrl}" alt="" />
                <div class="tweet_content">
                    <h2>${ele.title}</h2>
                    <p>${ele.desc}</p>
                </div>
            </div>		
            `;
        }
        document.getElementById('tweets').innerHTML = tweetsHTML;
    }
    
    function addTweetHandler(){
        const content = document.getElementById('add_tweet_input_ele').value;
        const tweet ={
            "imageUrl": "resources/images/profile.png",
        "title": "new tweet",
        "desc": content
        }
        tweets_list = [tweet, ...tweets_list]
        renderTweets();
    
    }
    renderTweets();
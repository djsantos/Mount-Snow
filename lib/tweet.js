// # Tweet Library

// # Tweet object
function Tweet(message, uid){
this.message = message;
this.uid = uid;
}


//database of tweets
var tweets = [ 
new Tweet('my name is daniel', 1),
new Tweet('my name is dante', 2),
new Tweet('my name is max', 3),
new Tweet('my name is bethaney', 4)
];


//returns tweets of the user with id id
function displayTweets(id){
	var result = [ ];
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id == tweets[i].uid)
    			result.push(tweets[i]);
      	}
      	return result;
};

//adds tweet to the tweets database
function createTweet(message, id, cb){
	if(message.length > 140){
    		cb('too long');
	}
	else if(!message || !id){
		cb('invalid tweet');
	}
	else{
		tweets.push(new Tweet(message, id));
	}	
};

//returns the number of tweets user uid has
function tweetCount(id){
	var count = 0;
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id == i.uid)
    			count++;
      	}
      	return count;
};

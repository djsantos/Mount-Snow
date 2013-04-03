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


//returns tweets of the user with id uid
exports.displayTweets = function(uid){
	var result = [ ];
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(uid == tweets[i].uid)
    			result.push(tweets[i]);
      	}
      	return result;
};

//adds tweet to the tweets database
exports.createTweet = function(message, uid, cb){
	if(message.length > 140){
    		cb('too long');
	}
	else if(!message || !uid){
		cb('invalid tweet');
	}
	else{
		tweets.push(new Tweet(message, uid));
    		cb('undefined');
	}	
};

//returns the number of tweets user uid has
exports.tweetCount = function(uid){
	var count = 0;
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(uid == i.uid)
    			count++;
      	}
      	return count;
};

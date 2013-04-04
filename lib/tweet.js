// # Tweet Library

//requires /lib/personyoufollow
var following = require('../lib/follow');

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
new Tweet('my name is bridgette', 4),
new Tweet('this is my second tweet', 1),
new Tweet('this is my second tweet', 2),
new Tweet('this is my second tweet', 3),
new Tweet('this is my second tweet', 4),
];


//returns tweets of the user with id id
exports.displayTweets = function(id){
	var result = [];
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id == tweets[i].uid)
    			result.push(tweets[i].message);
    		else{
    			if(!following.follow.isEmpty){
    				for(var x = 0; x < following.follow.length; x++) {
  					if(following.follow[x].myId == uid && following.follow[x].theirId == id)
  						result.push(tweets[i].message);
    				}
    			}
      		}
  	}
      	return result;
};



//returns tweets of only the user with id id
exports.displayMyTweets = function(id){
	var result = [];
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id == tweets[i].uid) result.push(tweets[i].message);
  	}
      	return result;
};


//adds tweet to the tweets database
exports.createTweet = function(message, id, cb){
	if(message.length > 140){
    		cb('too long');
	}
	else if(!message || !id){
		cb('invalid tweet');
	}
	else{
		tweets.push(new Tweet(message, id));
		cb();
	}	
};

//returns the number of tweets user uid has
exports.tweetCount = function(id){
	var count = 0;
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id == i.uid)
    			count++;
      	}
      	return count;
};

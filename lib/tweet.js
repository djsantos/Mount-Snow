// # Tweet Library

// # Tweet object
function Tweet(message, uid){
this.message = message;
this.uid = uid;
}


//database of tweets
var tweets = [ 
new Tweet('my name is daniel', 1);
new Tweet('my name is dante', 2);
new Tweet('my name is max', 3);
new Tweet('my name is bethaney', 4);
];


//displays tweets of the user with id uid
function displayTweets(uid, cb){
var len = tweets.length;
  for (var i = 0; i < len; i++) {
	if(uid == i.uid)
    		cb(tweets[i]);
      }
};

//adds tweet to the tweets database
function createTweet(message, uid, cb){
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

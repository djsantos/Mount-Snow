// # Tweet Library

//requires /lib/personyoufollow
var following = require('../lib/follow');
var user = require('../lib/user');
var connect = require('../lib/connect');

// # Tweet object
function Tweet(message, uid, username){
this.message = message;
this.uid = uid;//id of sender of tweet
if(!username)
	this.username = user.getUsername(uid);//username of sender of tweet
else
	this.username = username;
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
  	for (var i = len-1; i >= 0; i--) {
		if(id === tweets[i].uid){
			result.push(tweets[i].username + ' @' + tweets[i].username);
    			result.push(tweets[i].message);
		}
    		else{
    			var num = following.peopleYouFollowCount(id);
    			if(num > 0){
    				var me = following.getFollowingIds(id);
    				for(var x = 0; x < me.length; x++) {
  					if(me[x] === tweets[i].uid){
						result.push(tweets[i].username + ' @' + tweets[i].username);
  						result.push(tweets[i].message);
  					}
    				}
    			}
      		}
  	}
      	return result;
};



//returns tweets of only the user with uid id
exports.displayMyTweets = function(id){
	var result = [];
	var len = tweets.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === tweets[i].uid){
			result.push(tweets[i].username + ' @' + tweets[i].username);
			result.push(tweets[i].message);
		}
  	}
      	return result;
};

//returns the number of tweets user uid has
exports.tweetCount = function(id){
	var count = 0;
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if(id === tweets[i].uid)
    			count++;
      	}
      	return count;
};


//adds tweet to the tweets database
exports.createTweet = function(message, id, cb){
	var username = user.getUsername(id);
	var text = new String(message);
	if(text.length > 140){
    		cb('too long');
	}
	else if(!text || !id){
		cb('invalid tweet');
	}
	else{
	var done = false;

		while(!done){
			done = true;
			if(text.indexOf("@") !== -1){
				text = text.slice(text.indexOf("@")+1);
				if(text.indexOf("@") !== -1){
					username = text.slice(0, text.indexOf(" "));
					id = user.getUid(username);
					done = false;
				}
				else{
					id = user.getUid(text);
					username = text;
				}
				connect.addConnection(message, id);
			}		
			tweets.push(new Tweet(message, id, username));
			cb(undefined, id);
		}
	}
};

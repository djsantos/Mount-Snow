// # Tweet Library

//requires /lib/personyoufollow
var following = require('../lib/follow');
var user = require('../lib/user');
var connect = require('../lib/connect');

// # Tweet object
function Tweet(message, uid, uid2){
this.message = message;
this.uid = uid;//id of sender of tweet
this.uid2 = uid2;//id of reciever of tweet
this.username = user.getUsername(uid);//username of sender of tweet
this.username2 = user.getUsername(uid2);//username of reciever of tweet
}



//database of tweets
var tweets = [ 
new Tweet('my name is daniel', 1, 1),
new Tweet('my name is dante', 2, 2),
new Tweet('my name is max', 3, 3),
new Tweet('my name is bridgette', 4, 4),
new Tweet('this is my second tweet', 1, 1),
new Tweet('this is my second tweet', 2, 2),
new Tweet('this is my second tweet', 3, 3),
new Tweet('this is my second tweet', 4, 4),
];


//returns tweets of the user with id id
exports.displayTweets = function(id){
	var result = [];
	var len = tweets.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === tweets[i].uid2){
			result.push(tweets[i].username + ' @' + tweets[i].username2);
    			result.push(tweets[i].message);
		}
    		else{
    			var num = following.peopleYouFollowCount(id);
    			if(num > 0){
    				var me = following.getFollowingIds(id);
    				for(var x = 0; x < me.length; x++) {
  					if(me[x] === tweets[i].uid2){
						result.push(tweets[i].username + ' @' + tweets[i].username2);
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
		if(id === tweets[i].uid2){
			result.push(tweets[i].username + ' @' + tweets[i].username2);
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
	var name = new String(message);
	var id2 = id;
	if(name.length > 140){
    		cb('too long');
	}
	else if(!name || !id){
		cb('invalid tweet');
	}
	else{
	var done = false;

	while(!done){
		done = true;
		if(name.indexOf("@") !== -1){
			name = name.slice(name.indexOf("@")+1);
			if(name.indexOf("@") !== -1){
				var temp = name.slice(0, name.indexOf(" "));
				id2 = user.getUid(temp);
				done = false;
			}
			else{
				id2 = user.getUid(name);
			}
			connect.push(new Connect(message, id2));
		}		
		tweets.push(new Tweet(message, id, id2));
		cb(undefined, id);
	}}
};

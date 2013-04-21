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
	var uid = id;
	var username = user.getUsername(id);
	var text = new String(message);
	if(text.length > 140){
    	cb('too long');
		return;
	}
	else if(!text ||!id){
		cb('invalid tweet');
		return;
	}
	else{
	var done = false;

		//while loop makes sure to find all @username instances
		while(!done){
			done = true;
			
			//mentioning a user in your tweet
			if(text.indexOf("@", 1) !== -1){
				text = text.slice(text.indexOf("@")+1);
				
				if(text.indexOf("@") !== -1){
					var name = text.slice(0, text.indexOf(" "));
					uid = user.getUid(name);
					done = false;
				}
				else{
					uid = user.getUid(text);
				}
				//add mention
				connect.addMention(message, uid, username);
				//reset uid to user that is tweeting
				uid = id;
			}
			
			//tweeting at a user
			else if(text.charAt(0) === "@"){
				var name = text.slice(0, text.indexOf(" "));
				name = name.substring(1);
				uid = user.getUid(name);
				//tweets are invalid if the user tries to tweet at someone they are not following
				if(following.isFollowing(id,uid) ===false){
					cb('not following');
					return;
				}
				else{
					connect.addConnection(message, uid, username);
					//reset uid to user that is tweeting
					uid = id;
				}
			}
		}		
		tweets.push(new Tweet(message, uid, username));
		cb(undefined, uid);
		return;
	}
};

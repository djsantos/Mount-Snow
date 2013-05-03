// # Tweet Library

//requires /lib/personyoufollow
var following = require('../lib/follow');
var user = require('../lib/user');
var connect = require('../lib/connect');
//var sqlite3 = require('sqlite3');

//interacts with the database
//var db = new sqlite3.Database('./twitter.db');

// # Tweet object
function Tweet(message, uid, username){
this.message = message;
this.uid = uid;//uid of reciever of tweet(where it is gonna be displayed)
if(!username)
	this.username = user.getUsername(uid);//username of sender of tweet
else
	this.username = username;
this.date = new Date(new Date().getTime());
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
exports.displayTweets = function(id, cb){
	var result = [];
	var len = tweets.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === tweets[i].uid){
			result.push(tweets[i].username + ' @' + tweets[i].username + ' ' + tweets[i].date.toString());
    			result.push(tweets[i].message);
				//uid for favoriting button
				result.push(tweets[i].uid);
		}
    		else{
    			var num = following.peopleYouFollowCount(id);
    			if(num > 0){
    				var me = following.getFollowingIds(id);
    				for(var x = 0; x < me.length; x++) {
  						if(me[x] === tweets[i].uid){
							result.push(tweets[i].username + ' @' + tweets[i].username + ' ' + tweets[i].date.toString());
  							result.push(tweets[i].message);
							//uid for favoriting button
							result.push(tweets[i].uid);
  						}
    				}	
    			}
      		}
  	}
    //cb(undefined, result);
    return result;
};

exports.displayOtherTweets = function(id){
		var result = [];
	var len = tweets.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id !== tweets[i].uid){
			result.push(tweets[i].username + ' @' + tweets[i].username + ' ' + tweets[i].date.toString());
			result.push(tweets[i].message);
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
			result.push(tweets[i].username + ' @' + tweets[i].username + ' ' + tweets[i].date.toString());
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
		if((user.getUsername(id) === tweets[i].username))
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
			//tweeting at a user
			if(text.charAt(0) === "@"){
				var name = text.slice(0, text.indexOf(" "));
				name = name.substring(1);
				uid = user.getUid(name);
				//tweets are invalid if the user tries to tweet at someone they are not following
				if(following.isFollowing(id,uid) === false){
					cb('not following');
					return;
				}
				else{
					connect.addConnection(message, uid, username);
				}
			}

			//mentioning a user in your tweet
			else if(text.indexOf("@", 1) !== -1){
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
		}	
		//deals with twweting sound file 
		if(text.indexOf(".mp3") !== -1){
			//where the audio file should be uploaded
		}
		else{
			//handles hashtags in your tweet
			if(text.indexOf("#", 1) !== -1){
				text = text.slice(text.indexOf("#")+1);
		
				if(text.indexOf("#") !== -1){
					var tag = text.slice(0, text.indexOf(" "));
					done = false;
				}
				else{
					tag = text;
				}
				//add hashtag tweet
				connect.addHashtag(message, username, tag);
			}
			//username is the sender's username and uid is the uid of whose page to display on 	
			tweets.push(new Tweet(message, uid, username));
			//db.run("insert into tweets values ( ?, ?, ?, ?)", 
			//	[message, uid, username, new Date()], cb(undefined, uid));
			cb(undefined, uid);
			//reset uid to user that is tweeting
			uid = id;
			return;
	}
	}
};

//returns the number of tweets user uid has
exports.deleteTweet = function(message, id, cb){
	var len = tweets.length;
  	for (var i = 0; i < len; i++) {
		if((message === tweets[i].message) && (user.getUsername(id) === tweets[i].username)){
    			delete tweets[i];
    			return;
		}
      	}
      	cb('error');
};

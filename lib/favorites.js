// # Favorites Library

//requires /lib/user
var userLib = require('../lib/user');
//requires /lib/activity
var activityLib = require('../lib/activity');

// # Favorite object
function favorite(tweet, tweetUid, uid){
this.tweetMes = tweet; //tweet message being favorited
this.tweetUid = tweetUid;//uid of tweeter being favorited
this.tweetUName = userLib.getUsername(tweetUid);//username of tweeter being favorited
this.uid = uid;//id of the person favoriting the tweet
this.username = userLib.getUsername(uid);//username of the person favoriting the tweet
}



//database of favorites
var favorite = [ 
	new favorite('my name is daniel', 1, 4),
	new favorite('my name is dante', 2, 1),
	new favorite('my name is max', 3, 2),
	new favorite('my name is bridgette', 4, 3)
];


//returns Favorites of only the user with uid id
exports.displayMyFavorites = function(id){
	var result = [];
	var len = favorite.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === favorite[i].uid){
			var item = [favorite[i].tweetUName + " @" + favorite[i].tweetUName, favorite[i].tweetMes];
			result.push(item);
		}
  	}
      	return result;
};


//adds favorite to the favorites database
//tweet is the tweet to be favorited
//id is the user favoriting the tweet
exports.createFavorite = function(tweet, id, cb){
	var uid = id;
	var tweetUid = tweet.uid;
	var text = new String(tweet.message);
	if(text.length > 140){
    	cb('too long');
		return;
	}
	else if(!text ||!id){
		cb('invalid tweet');
		return;
	}
	else{		
		//add favorite to activity feed
		activityLib.addActivity('favorite',new favorite(text, tweetUid, uid));
		favorites.push(new favorite(text, tweetUid, uid));
		cb(undefined, uid);
		return;
	}
};

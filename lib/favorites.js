// # Favorites Library

//requires /lib/user
var userLib = require('../lib/user');
//requires /lib/activity
var activityLib = require('../lib/activity');

// # Favorite object
function favorite(tweet, tweetUid, uid){
this.tweetMes = new String(tweet); //tweet message being favorited
this.tweetUid = tweetUid;//uid of tweeter being favorited
this.tweetUName = userLib.getUsername(tweetUid);//username of tweeter being favorited
this.uid = uid;//id of the person favoriting the tweet
this.username = userLib.getUsername(uid);//username of the person favoriting the tweet
}



//database of favorites
var favorites = [ 
	new favorite('my name is daniel', 1, 4),
	new favorite('my name is dante', 2, 1),
	new favorite('my name is max', 3, 2),
	new favorite('my name is bridgette', 4, 3)
];


//returns Favorites of only the user with uid id
exports.displayMyFavorites = function(id){
	var result = [];
	var len = favorites.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === favorites[i].uid){
			var item = [favorites[i].tweetUName + " @" + favorites[i].tweetUName, favorites[i].tweetMes];
			result.push(item);
		}
  	}
      	return result;
};


//adds favorite to the favorites database
//tweet is the tweet to be favorited
//id is the user favoriting the tweet
//theirId is the id of the tweeter
exports.createFavorite = function(id, theirId, tweet, cb){
	var uid = parseInt(id,10);
	var tweetUid = parseInt(theirId,10);
	var text = new String(tweet);
	if(text.length > 140){
    	cb('too long');
		return;
	}
	else if(!text ||!id){
		cb('invalid tweet');
		return;
	}
	else{		
		favorites.push(new favorite(text, tweetUid, uid));
		//add favorite to activity feed
		activityLib.addActivity('favorite', new favorite(text, tweetUid, uid));
		cb();
		return;
	}
};

//Boolean function for checking if theirId's tweet has already been favorited by uid
exports.isFavorite = function(tweet, theirId, uid){
	var uid = parseInt(uid,10);
	var tweetUid = parseInt(theirId,10);
	var tweetMes = new String(tweet);
	var len = favorites.length;
	for (var i = 0; i < len; i++) {
		var t = new String(favorites[i].tweetMes);
		if(parseInt(favorites[i].uid,10) === uid && parseInt(favorites[i].tweetUid,10) === tweetUid && t.valueOf() === tweetMes.valueOf()) return true;
	}
	return false;
};

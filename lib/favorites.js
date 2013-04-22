// # Favorites Library

//requires /lib/tweet
var tweetLib = require('../lib/tweet');
//requires /lib/follow
var followLib = require('../lib/follow');
//requires /lib/user
var userLib = require('../lib/user');

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


//returns favorites of the user with id id
exports.displayFavorites = function(id){
	var result = [];
	var len = favorite.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === favorite[i].uid){
			result.push('You favorited: ');
			result.push(favorite[i].tweetUName + ' @' + favorite[i].tweetUName);
    		result.push(favorite[i].tweetMes);
		}
    	else{
    		var num = followLib.peopleYouFollowCount(id);
    		if(num > 0){
    			var me = followLib.getFollowingIds(id);
    			for(var x = 0; x < me.length; x++) {
					if(me[x] === follow[i].uid){
						result.push(favorite[i].username + ' favorited: ');
						result.push(favorite[i].tweetUName + ' @' + favorite[i].tweetUName);
						result.push(favorite[i].tweetMes);
					}
    			}
    		}
    	}
  	}
      	return result;
};



//returns Favorites of only the user with uid id
exports.displayMyFavorites = function(id){
	var result = [];
	var len = favorite.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === favorite[i].uid){
			console.log(id + "==" + favorite[i].uid);
			var item = [favorite[i].tweetUName + " @" + favorite[i].tweetUName, favorite[i].tweetMes];
			console.log(favorite[i].tweetUName + " and " + favorite[i].tweetUid);
			result.push(item);
		}
  	}
      	return result;
};

//returns the number of Favorites user uid has
exports.favoriteCount = function(id){
	var count = 0;
	var len = favorites.length;
  	for (var i = 0; i < len; i++) {
		if(id === favorites[i].uid)
    			count++;
      	}
      	return count;
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
		favorites.push(new favorite(text, tweetUid, uid));
		cb(undefined, uid);
		return;
	}
};

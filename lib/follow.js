// # Follow Library

/*
*requires lib/user
*/
var userLib = require('../lib/user');
//Retrieves userArray from the user lib for use in follow functions
var userdb = userLib.getUserDB();
//requires /lib/activity
var activityLib = require('../lib/activity');


// # PersonYouFollow object
function PersonYouFollow(myId, theirId){
this.myId = myId;
this.theirId = theirId;
}

//follow array: database of followers
var follow = [ 
new PersonYouFollow(1, 2),
new PersonYouFollow(2, 3),
new PersonYouFollow(3, 4),
new PersonYouFollow(4, 1)
];

//For adding a new follow/follower pair to the database
//myId = the ID of the user who is trying to follow someone
//theirId = the ID of the user who will be followed
//cb = callback function
exports.addPersonYouFollow = function(myId, theirId, cb){
    if(!myId || !theirId){
    	cb('error');
    	return;
    }
    //Error when you try to follow yourself
    else if(myId === theirId){
    	cb('cant follow yourself');
    	return;
    }
	else{
		//Error when you try to follow someone you are already following
  		if(module.exports.isFollowing(myId, theirId)){
  			cb('Already following this user.');
  			return;
		}
		//adds a new PersonYouFollow object to the follow array
		follow.push(new PersonYouFollow(myId, theirId));
		//add follow to activity feed
		activityLib.addActivity('follow',new PersonYouFollow(myId, theirId));
		cb();
		return;
	}
};

//Returns true if the myId is following theirId and false otherwise
exports.isFollowing = function(myId, theirId){
	for(var x = 0; x < follow.length; x++) {
 		if(parseInt(follow[x].myId,10) === parseInt(myId,10) && parseInt(follow[x].theirId,10) === parseInt(theirId,10)){
 			return true;
		}
	}
	return false;
};


//Returns an array of usernames which user with id is following
exports.displayFollowing = function(id){
	var result = [];
	var len = follow.length;
	console.log(len);
	if(len!=0){
		for(var x = 0; x < len; x++) {
			if(follow[x].myId === id){
					var them = follow[x].theirId;
					var len2 = userdb.length;
					for (var i = 0; i < len2; i++) {
	    					if (parseInt(userdb[i].uid,10) === parseInt(them,10)){
								result.push(userdb[i].username);
								break;
							}
					}
			}
		}
	}
	return result;
};


//Returns an array of userIDs which user with id is following
exports.getFollowingIds = function(id){
	var result = [];
	var len = follow.length;
	for(var x = 0; x < len; x++) {
		if(follow[x].myId === id){
				var them = follow[x].theirId;
				var len2 = userdb.length;
				for (var i = 0; i < len2; i++) {
    					if (parseInt(userdb[i].uid,10) === parseInt(them,10)){
							result.push(userdb[i].uid);
							break;
						}
				}
		}
	}
	return result;
};

//returns the number of people user with id is following
exports.peopleYouFollowCount = function(id){
	var count = 0;
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].myId === id)
			count++;
	}
	return count;
};

//Returns an array of usernames who follow user with id
exports.displayFollowers = function(id){
	var result = [];
	for(var x = 0; x < follow.length; x++) {
		if(parseInt(follow[x].theirId,10) === parseInt(id,10)){
			for (var i = 0; i < userdb.length; i++) {
    				if (parseInt(userdb[i].uid,10) === parseInt(follow[x].myId,10))
					result.push(userdb[i].username);
			}
		}
	}
	return result;
};

//returns the number of people who follow user with id
exports.followersCount = function(id){
	var count = 0;
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].theirId === id)
			count++;
	}
	return count;
};

//unfollows a user
exports.unFollow = function(myId, theirId, cb){
    if(!myId || !theirId){
    	cb('error');
    	return;
    }
    //Error when you try to follow yourself
    else if(myId === theirId){
    	cb('cant follow yourself');
    	return;
    }
	else{
		//Error when you try to unfollow someone you do not already follow
  		if(!module.exports.isFollowing(myId, theirId)){
  			cb('not following this user.');
  			return;
		}
		//removes new PersonYouFollow object to the follow array
		for(var x = 0; x < follow.length; x++) {
			if((follow[x].myId === myId) && (follow[x].theirId === theirId)){
				delete follow[x];
				cb();
				return;
			}
				
		}
		/*Do we need this part??
		//add unfollow to activity feed
		activityLib.addActivity('follow',new PersonYouFollow(myId, theirId));*/
	}
};

// # Follow Library

/*
*requires lib/user
*/
var userLib = require('../lib/user');

// # PersonYouFollow object
function PersonYouFollow(myId, theirId){
this.myId = myId;
this.theirId = theirId;
}

//database of followers

var follow = [ 
new PersonYouFollow(1, 2),
new PersonYouFollow(2, 3),
new PersonYouFollow(3, 4),
new PersonYouFollow(4, 1)
];

//adds PersonYouFollow to the follow database
exports.addPersonYouFollow = function(myId, theirId, cb){
    	if(!id || !theirId){
    		cb('error');
    		return;
    	}
    		
    	else if(myId == theirId){
    		cb('cant follow yourself');
    		return;
    	}

	else{
		for(var x = 0; x < follow.length; x++) {
  			if(follow[x].myId == myId && follow[x].theirId == theirId)
  				cb('Already following this user.');
  				return;
		}
	}
	follow.push(new PersonYouFollow(myId, theirId));
};

//displays your followers
exports.displayFollowing = function(id){
	var result = [];
	var len = follow.length;
	for(var x = 0; x < len; x++) {
		if(follow[x].myId === id){
			if(userLib.userdb){
				var userdb = userLib.getUserDB();
				var len2 = userdb.length;
				for (var i = 0; i < len2; i++) {
    					var u = userLib.userdb[i];
    					if (u.uid === follow[x].theirId){ 
						result.push(u.username);
    					}
				}
			}
		}
	}
	return result;
};


//
exports.getFollowingIds = function(id){
	var result = [];
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].myId == id){
			if(userLib.userdb){
				for (var i = 0; i < userLib.userdb.length; i++) {
    					var u = userLib.userdb[i];
    					if (u.uid == follow[x].theirId){ 
						result.push(u.uid);
						break;
    					}
				}
			}
		}
	}
	return result;
};

//returns the number of people uid follows
exports.peopleYouFollowCount = function(id){
	var count = 0;
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].myId === id)
			count++;
	}
	return count;
};

//displays followers id has
exports.displayFollowers = function(id){
	var result = [];
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].theirId === id){
			if(userLib.userdb){
				for (var i = 0; i < userLib.userdb.length; i++) {
    					var u = userLib.userdb[i];
    					if (u.uid === follow[x].myId){ 
						result.push(u.username);
						break;
    					}
				}
			}
		}
	}
	return result;
};

//returns the number of followers user id has
exports.followersCount = function(id){
	var count = 0;
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].theirId === id)
			count++;
	}
	return count;
};

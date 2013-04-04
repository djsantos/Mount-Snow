// # Follow Library

/*
*requires lib/user
*/
var userLib = require('..lib/user');

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
	var yes = true;
	
    	if(!id || !thereId)
    		cb('error');
    		
    	else if(myId == theirId)
    		cb('cant follow yourself');

	else{
		for(var x = 0; x < follow.length; x++) {
  			if(follow[x].myId == myId && follow[x].theirId == theirId){
  				cb('Already following this user.');
  				yes = false;
  			}
		}
		if(yes)
			follow.push(new PersonYouFollow(myId, theirId));
	}
};

//displays your followers
exports.displayFollowing = function(id){
	var result = []
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].myId == id){
			for (var i = 0; i < len; i++) {
    				var u = userLib.userdb[i];
    				if (u.uid === follow[x].theirId){ 
					result.push(u.username);
					break;
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
		if(follow[x].myId == id)
			count++;
	}
	return count;
};

//displays followers id has
exports.displayFollowers = function(id){
	var result = []
	for(var x = 0; x < follow.length; x++) {
		if(follow[x].theirId == id){
			for (var i = 0; i < len; i++) {
    				var u = userLib.userdb[i];
    				if (u.uid === follow[x].myId){ 
					result.push(u.username);
					break;
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
		if(follow[x].theirId == id)
			count++;
	}
	return count;
};

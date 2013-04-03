// # Follower Library

/*Basically, if userID 1 follows userID 2
userID 2 will have Follower(1) added to their
follower database.

userID 1 will have PeopleYouFollow(2) added to their
people they follow database
*/

// # Follower object
function Follower(uid){
this.uid = uid;
}

//database of tweets

var followers = [ 
new Follower(1),
new Follower(2),
new Follower(3),
new Follower(4)
];

//adds Follower to the followers database
exports.addFollower = function(id, cb){
	if(!id){
    		cb('User does not exist');
	}
	for each (Follower f in this.followers) {
  		if(f.uid == id){
  			cb('Already following this user.')
  			return;
  		}
	}
	//if exists and not already following, add as follower.
	followers.push(new Follower(id));
	}	
};

//returns the number of followers user uid has
exports.followerCount = function(id){
	return this.followers.length;
};

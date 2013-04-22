// # Activity Library

//requires /lib/follow
var followLib = require('../lib/follow');
//requires /lib/user
var userLib = require('../lib/user');

// # Activity object
function activity(type, item){
	this.type = type; //declares type of activity either as 'follow' or 'favorite'
	this.item = item; //item is an object of type type
	if(type === 'favorite'){
		this.tweetMes = item.tweetMes; //tweet message being favorited
		this.tweetUid = item.tweetUid;//uid of tweeter being favorited
		this.tweetUName = userLib.getUsername(item.tweetUid); //username of tweeter being favorited
		this.uid = item.uid; //id of the person favoriting the tweet
		this.username = userLib.getUsername(item.uid); //username of the person favoriting the tweet
	}
	else{
		this.myId = item.myId; //id of user who is to be the follower
		this.theirId = parseInt(item.theirId,10); //id of user who will be followed
		this.myUName = userLib.getUsername(item.myId); //username of user who is to be the follower
		this.theirUName = userLib.getUsername(this.theirId); //username of user who will be followed
	}
}

//TEMP FOLLOW AND FAVORITE OBJECTS FOR INITIAL POPULATION OF ACTIVITIES
// # PersonYouFollow object
function PersonYouFollow(myId, theirId){
this.myId = myId;
this.theirId = theirId;
}

// # Favorite object
function favorite(tweet, tweetUid, uid){
this.tweetMes = tweet; //tweet message being favorited
this.tweetUid = tweetUid;//uid of tweeter being favorited
this.tweetUName = userLib.getUsername(tweetUid);//username of tweeter being favorited
this.uid = uid;//id of the person favoriting the tweet
this.username = userLib.getUsername(uid);//username of the person favoriting the tweet
}

//database of activities
var activities = [ 
	new activity('follow', new PersonYouFollow(1, 2)),
	new activity('favorite', new favorite('my name is dante', 2, 1)),
	new activity('follow', new PersonYouFollow(2, 3)),
	new activity('follow', new PersonYouFollow(3, 4)),
	new activity('favorite', new favorite('my name is max', 3, 2)),
	new activity('follow', new PersonYouFollow(4, 1)),
	new activity('favorite', new favorite('my name is daniel', 1, 4)),
	new activity('favorite', new favorite('my name is bridgette', 4, 3))
];


//returns 10 most recent activities
exports.displayActivities = function(){
	var result = [];
	var len = activities.length;
	if(len>=10){
		for (var i = (len-1); i >=(len-10); i--) {
			if(activities[i].type === 'favorite'){
				var item = [activities[i].username + " @" + activities[i].username + " has favorited " + activities[i].tweetUName + " @" + activities[i].tweetUName + " tweet: ", activities[i].tweetMes];
				result.push(item);
			}
			else{
				var item = [activities[i].myUName + " @" + activities[i].myUName + " has followed: ", activities[i].theirUName+ " @" + activities[i].theirUName];
				result.push(item)
			}
		}
	}
	else{
		for (var i = (len-1); i >=0; i--) {
			if(activities[i].type === 'favorite'){
				var item = [activities[i].username + " has favorited " + activities[i].tweetUName + " @" + activities[i].tweetUName + " tweet: ", activities[i].tweetMes];
				result.push(item);
			}
			else{
				var item = [activities[i].myUName + " @" + activities[i].myUName + " has followed: ", activities[i].theirUName+ " @" + activities[i].theirUName];
				result.push(item)
			}
		}
	}
      	return result;
};


//adds activity to the activities database
//type can be 'follow' or 'favorite'
//item is the object of type type
exports.addActivity = function(type, item){		
	activities.push(new activity(type, item));
};

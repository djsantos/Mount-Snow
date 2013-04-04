// # Follow Library

// # PersonYouFollow object
function PersonYouFollow(myId, theirId){
this.myId = myId;
this.theirId = theirId;
}

//database of tweets

var follow = [ 
new PersonYouFollow(1, 2),
new PersonYouFollow(2, 3),
new PersonYouFollow(3, 4),
new PersonYouFollow(4, 1)
];

//adds PersonYouFollow to the peopleyoufollow database
exports.addPersonYouFollow = function(myId, theirId, cb){
	var yes = true;
    	if(!id || !thereId)
    		cb('error');
    		
    	else if(myId == theirId)
    		cb('cant follow yourself');

	else{
		for(var x = 0; x < peopleyoufollow.length; x++) {
  			if(peopleyoufollow[x].myId == myId && peopleyoufollow[x].theirId == theirId){
  				cb('Already following this user.');
  				yes = false;
  			}
		}
		if(yes)
			peopleyoufollow.push(new PersonYouFollow(myId, theirId));
	}
};

//returns the number of people uid follows
exports.peopleYouFollowCount = function(id){
	var count = 0;
	for(var x = 0; x < peopleyoufollow.length; x++) {
		if(peopleyoufollow[x].myId == id)
			count++;
	}
	return count;
};

//returns the number of followers user uid has
exports.followersCount = function(id){
	var count = 0;
	for(var x = 0; x < peopleyoufollow.length; x++) {
		if(peopleyoufollow[x].theirId == id)
			count++;
	}
	return count;
};

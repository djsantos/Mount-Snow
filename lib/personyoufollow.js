// # PeopleYouFollow Library

/*Basically, if userID 1 follows userID 2
userID 2 will have Follower(1) added to their
follower database.

userID 1 will have PeopleYouFollow(2) added to their
people they follow database
*/

// # PersonYouFollow object
function PersonYouFollow(uid){
this.uid = uid;
}

//database of tweets

var peopleyoufollow = [ 
new PersonYouFollow(1),
new PersonYouFollow(2),
new PersonYouFollow(3),
new PersonYouFollow(4)
];

//returns the number of followers user uid has
exports.peopleYouFollowCount = function(id){
  return this.peopleyoufollow.length;
};

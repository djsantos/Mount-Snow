/*
@module routes/following
*/

/*
* requires /lib/follow
*/
var followlib = require('../lib/follow');

var myUsername = null;

//renders following view 
exports.following = function(req,res){
  myUsername = req.session.user;
  myUID = myUsername.uid;
  followingList = followLib.displayFollowing(myUID);
  res.render('following', {
	title: 'Twitter',
	username: myUsername,
	following: followingList
  });
};

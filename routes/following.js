/*
@module routes/following
*/

/*
* requires /lib/follow
*/
var followLib = require('../lib/follow');

var myUsername = null;
var myUID = null;
var followingList = new Array();

//renders following view 
exports.following = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  followingList = followLib.displayFollowing(myUID); 
  res.render('following', {
	title: 'Twitter',
	username: myUsername,
	following: followingList
  });
};

/*
@module routes/following
*/

/*
* requires /lib/follow
*/
var followLib = require('../lib/follow');

var myUsername = null;
var myUID = parseInt(-1,10)
var followingList = new Array();

//renders following view 
exports.following = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  followingList = followLib.displayFollowing(myUID); 
  res.render('following', {
	title: 'Twitter',
	username: myUsername,
	following: followingList
  });
};

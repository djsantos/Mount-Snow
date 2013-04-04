/*
@module routes/followers
*/
/*
* requires /lib/follow
*/
var followlib = require('../lib/follow');

var myUsername = null;

//renders followers view 
exports.followers = function(req,res){
  myUsername = req.session.user;
  myUID = myUsername.uid;
  followList = followLib.displayFollowers(myUID);
  res.render('followers', {
	title: 'Twitter',
	username: myUsername,
	followers: followList
  });
};

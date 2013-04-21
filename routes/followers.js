/*
@module routes/followers
*/
/*
* requires /lib/follow
*/
var followLib = require('../lib/follow');
var followList = new Array();
var myUsername = null;
var myUID = null;

//renders followers view 
exports.followers = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  followList = followLib.displayFollowers(myUID);
  res.render('followers', {
	title: 'Twitter',
	username: myUsername,
	followers: followList,
	id: myUID
  });
};

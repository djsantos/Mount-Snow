/*
@module routes/followers
*/
/*
* requires /lib/follow
*/
var followLib = require('../lib/follow');

var myUsername = null;
var myUID = null;

//renders followers view 
exports.followers = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  var followList = followLib.displayFollowers(myUID);
  res.render('followers', {
	title: 'Twitter',
	username: myUsername,
	followers: followList
  });
};

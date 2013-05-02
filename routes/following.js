/*
@module routes/following
*/

/*
* requires /lib/follow
*/
var followLib = require('../lib/follow');
var userLib = require('../lib/user');

var myUsername = null;
var myUID = parseInt(-1,10);
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

exports.unfollow = function(req,res){
	var theirId = userLib.getUid(req.body.unfollow);
	var uid = req.session.uid;
	//library call for unfollowing
	followLib.unFollow(uid, theirId, function(error){
		if(error === 'error'){
		}
		else if(error === 'cant follow yourself'){
		}
		else if(error === 'not following this user.'){
		}
		else{
			res.redirect('/following');
		}
	});
}
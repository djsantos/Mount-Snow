/*
@module routes/findFriends
*/
var followLib = require('../lib/follow');
var userLib = require('../lib/user');
var myUsername = null;
var uid = null;
var userList = new Array();
var followingList = new Array();
var optionsList = new Array();

//renders findFriends view
exports.findFriends = function(req,res){
  myUsername = req.session.user
  uid = req.session.uid;
  userList = userLib.displayAllUsers();
  followingList = followLib.displayFollowing(uid);
  var b = true;
  for(x in userList){
	for(y in followingList){
		if(userList[x] === followingList[y]){
			b = false;
			break;
		}
		else if(userList[x] === myUsername){
			b = false;
			break;
		}
	}
	if(b===true)optionsList.push(userList[x]);
	if(b===false) b=true;
  }
			
  res.render('findFriends', {
	title: 'Twitter',
	username: myUsername,
	allOptions: optionsList
  });
}

exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.activity = function(req,res){
	res.redirect('/activity');
};

exports.browseCategories = function(req,res){
	res.redirect('/browseCategories');
};

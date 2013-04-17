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
  myUsername = req.session.user;
  uid = req.session.uid;
  determineVariables(uid);		
  res.render('findFriends', {
	title: 'Twitter',
	username: myUsername,
	allOptions: optionsList

  });console.log(optionsList.length);
};

/*
* Retrieves the userlist and follow list from the respective libraries.
* Sorts out a new list with only valid follow options
*/
function determineVariables(myUserId){
	optionsList = new Array();
  userList = userLib.getUserDB();
  followingList = followLib.displayFollowing(uid);
  var b = true;
  for(x in userList){
	//do not display the current user as an option
	if(userList[x].username === myUsername)break;
	for(y in followingList){
		//do not display people the user has already followed
		if(userList[x].username === followingList[y]){
			b = false;
			break;
		}
	}
	if(b===true)optionsList.push(userList[x]);
	if(b===false) b=true;
  }
};

exports.follow = function(req,res){
	var theirId = req.body.follow;
	var uid = req.session.uid;
	//library call for adding follow/follower pair to database object
	followLib.addPersonYouFollow(uid, theirId, function(error){
		if(error == 'error'){
		}
		else if(error == 'cant follow yourself'){
		}
		else if(error == 'Already following this user.'){
		}
		else{
			res.redirect('/findFriends');
		}
	});
	
};

exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.activity = function(req,res){
	res.redirect('/activity');
};

exports.browseCategories = function(req,res){
	res.redirect('/browseCategories');
};

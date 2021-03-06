/*
@module routes/findFriends
*/
var followLib = require('../lib/follow');
var userLib = require('../lib/user');
var myUsername = null;
var myUID = parseInt(-1,10)
var userList = new Array();
var followingList = new Array();
var optionsList = new Array();

//renders findFriends view
exports.findFriends = function(req,res){
 userList = [];
 followingList = [];
 optionsList = [];
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID=== null) res.redirect('/welcome');
  determineVariables(myUID);		
  res.render('findFriends', {
	title: 'Twitter',
	username: myUsername,
	id: myUID,
	allOptions: optionsList
  });
};

/*
* Retrieves the userlist and follow list from the respective libraries.
* Sorts out a new list with only valid follow options
*/
function determineVariables(myUID){
  optionsList = new Array();
  userList = userLib.getUserDB();
  followingList = followLib.displayFollowing(myUID);
  var b = true;
  for(x in userList){
	//do not display the current user as an option
	if(userList[x].username === myUsername)b = false;
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
		if(error === 'error'){
		}
		else if(error === 'cant follow yourself'){
		}
		else if(error === 'Already following this user.'){
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

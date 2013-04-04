/*
@module routes/findFriends
*/
var Followlib = require('../lib/follow');
var Userlib = require('../lib/user');
var myUsername = null;
var uid = null;
var userList = new Array();

//renders findFriends view
exports.findFriends = function(req,res){
  myUsername = req.session.user
  uid = req.session.uid;
  userList = Userlib.displayAllUsers();
  res.render('findFriends', {
	title: 'Twitter',
	username: myUsername,
	allUsers: userList
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

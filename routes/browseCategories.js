/*
@module routes/browseCategories
*/

var connect = require('../lib/connect');
var myUsername = null;
var myUID = parseInt(-1,10)

//renders browseCategories view 
exports.browseCategories = function(req,res){
  myUsername = req.session.user;
    myUID = req.session.uid;
   var tags = connect.displayHashtag();
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  res.render('browseCategories', {
	title: 'Twitter',
	username: myUsername,
	tags: tags
  });
}

exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.activity = function(req,res){
	res.redirect('/activity');
};

exports.findFriends = function(req,res){
	res.redirect('/findFrineds');
};

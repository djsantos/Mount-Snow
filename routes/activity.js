/*
@module routes/activity
*/

var myUsername = null;
var myUID = parseInt(-1,10)
//list to hold 10 most recent activity messages
var activityList = new Array();

//renders activity view 

exports.activity = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10))res.redirect('/welcome');
  res.render('activity', {
	title: 'Twitter',
	username: myUsername,
	id: myUID,
	feed: activityList
  });
}


exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.findFriends = function(req,res){
	res.redirect('/findFrineds');
};

exports.browseCategories = function(req,res){
	res.redirect('/browseCategories');
};

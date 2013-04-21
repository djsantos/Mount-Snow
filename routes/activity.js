/*
@module routes/activity
*/

var myUsername = null;
var uid = null;

//renders activity view 

exports.activity = function(req,res){
  myUsername = req.session.user;
  uid = req.session.uid;
  res.render('activity', {
	title: 'Twitter',
	username: myUsername,
	id: uid
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

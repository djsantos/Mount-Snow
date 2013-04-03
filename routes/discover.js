/*
@module routes/discover
*/

var myUsername = null;

//renders discover view
exports.discover = function(req,res){
  myUsername = req.session.user;
  res.render('discover', {
	title: 'Twitter',
	username: myUsername
  });
}

exports.activity = function(req,res){
	res.redirect('/activity');
};

exports.findFriends = function(req,res){
	res.redirect('/findFriends');
};

exports.browseCategories = function(req,res){
	res.redirect('/browseCategories');
};

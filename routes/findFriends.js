/*
@module routes/findFriends
*/
var myUsername = null;

//renders findFriends view
exports.findFriends = function(req,res){
  myUsername = req.session.user
  res.render('findFriends', {
	title: 'Twitter',
	username: myUsername
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

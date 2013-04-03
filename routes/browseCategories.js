/*
@module routes/browseCategories
*/

var myUsername = null;

//renders browseCategories view 
exports.browseCategories = function(req,res){
  myUsername = req.session.user;
  res.render('browseCategories', {
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

exports.findFriends = function(req,res){
	res.redirect('/findFrineds');
};

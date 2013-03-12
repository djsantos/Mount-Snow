/*
@module routes/findFriends
*/

//renders findFriends view
exports.findFriends = function(req,res){
  res.render('findFriends', {title: 'Twitter'});
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

exports.findFriends = function(req,res){
  res.render('findFriends', {title: 'Twitter'});
}

exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.activity = function(req,res){
	res.redirect('/discover/activity');
};

exports.browseCategories = function(req,res){
	res.redirect('/discover/browseCategories');
};

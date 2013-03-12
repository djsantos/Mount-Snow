exports.browseCategories = function(req,res){
  res.render('browseCategories', {title: 'Twitter'});
}

exports.discover = function(req,res){
	res.redirect('/discover');
};

exports.activity = function(req,res){
	res.redirect('/discover/activity');
};

exports.findFriends = function(req,res){
	res.redirect('/discover/findFrineds');
};

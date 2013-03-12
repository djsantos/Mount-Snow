exports.discover = function(req,res){
  res.render('discover', {title: 'Twitter'});
}

exports.activity = function(req,res){
	res.redirect('/discover/activity');
};

exports.findFriends = function(req,res){
	res.redirect('/discover/findFriends');
};

exports.browseCategories = function(req,res){
	res.redirect('/discover/browseCategories');
};

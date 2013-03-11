exports.discover = function(req,res){
  res.render('discover', {title: 'Twitter'});
}

exports.activity = function(req,res){
	res.redirect('/activity');
};

exports.findFriends = function(req,res){
	res.redirect('/findFrineds');
};

exports.browseCategories = function(req,res){
	res.redirect('/browseCategories');
};

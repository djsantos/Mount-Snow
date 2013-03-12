/*
@module routes/activity
*/

//renders activity view 

exports.activity = function(req,res){
  res.render('activity', {title: 'Twitter'});
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

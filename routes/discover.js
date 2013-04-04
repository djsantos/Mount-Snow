/*
@module routes/discover
*/
/*
 * GET discover file
 */
var discoverLib = require('../lib/discover');

var myUsername = null;

//renders discover view
exports.discover = function(req,res){
  myUsername = req.session.user;
  var discoverList = displayDiscover();
  res.render('discover', {
	title: 'Twitter',
	username: myUsername,
	discover: discoverList
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

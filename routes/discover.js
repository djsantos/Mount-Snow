/*
@module routes/discover
*/
/*
 * GET discover file
 */
var discoverLib = require('../lib/discover');

var myUsername = null;
var myUID = parseInt(-1,10)

//renders discover view
exports.discover = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  var discoverList = discoverLib.displayDiscover(myUID);
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

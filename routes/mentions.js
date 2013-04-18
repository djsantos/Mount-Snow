/*
@module routes/mentions
*/

/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

var myUsername = null;
var uid = null;

//renders mentions view

exports.mentions = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  
  var mentionList = connectLib.displayMention(uid);
  res.render('mentions', {
	title: 'Twitter',
	username: myUsername,
	mentions: mentionList
  });
}

exports.connect = function(req,res){
	res.redirect('/connect');
};

/*
@module routes/mentions
*/

/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

var myUsername = null;
var myUID = null;

//renders mentions view

exports.mentions = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  
  var mentionList = connectLib.displayMention(myUID);
  res.render('mentions', {
	title: 'Twitter',
	username: myUsername,
	mentions: mentionList
  });
}

exports.connect = function(req,res){
	res.redirect('/connect');
};

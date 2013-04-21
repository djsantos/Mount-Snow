/*
@module routes/mentions
*/

/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

var myUsername = null;
var myUID = parseInt(-1,10)

//renders mentions view

exports.mentions = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
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

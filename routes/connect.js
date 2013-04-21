/*
@module routes/connect
*/

/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

var myUsername = null;
var myUID = parseInt(-1,10)

//renders connect view
exports.connect = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  var connectList = connectLib.displayConnection(myUID);
  res.render('connect', {
	title: 'Twitter',
	username: myUsername,
	connect: connectList
  });
}

exports.mentions = function(req,res){
	res.redirect('/mentions');
};


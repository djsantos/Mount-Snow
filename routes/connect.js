/*
@module routes/connect
*/

var myUsername = null;
/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

//renders connect view
exports.connect = function(req,res){
  myUsername = req.session.user;
  var myUID = req.session.uid;
  
  var connectList = connectLib.displayConnect(myUID);
  res.render('connect', {
	title: 'Twitter',
	username: myUsername,
	connect: connectList
  });
}

exports.mentions = function(req,res){
	res.redirect('/mentions');
};


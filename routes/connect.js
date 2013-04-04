/*
@module routes/connect
*/

/*
 * GET connect file
 */
var connectLib = require('../lib/connect');

var myUsername = null;
var myUID = null;

//renders connect view
exports.connect = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  
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


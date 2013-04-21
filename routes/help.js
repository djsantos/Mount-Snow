/*
@module routes/help
*/

var myUsername = null;
var myUID = parseInt(-1,10)

//renders help view 
exports.help = function(req,res){
  myUsername = req.session.user;
	myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  res.render('help', {
	title: 'Twitter',
	username: myUsername
  });
}
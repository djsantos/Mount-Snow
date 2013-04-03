/*
@module routes/help
*/

var myUsername = null;

//renders help view 
exports.help = function(req,res){
  myUsername = req.session.user;
  res.render('help', {
	title: 'Twitter',
	username: myUsername
  });
}
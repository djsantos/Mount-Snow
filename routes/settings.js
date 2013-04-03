/*
@module routes/settings
*/

var myUsername = null;

//renders settings view 
exports.settings = function(req,res){
  myUsername = req.session.user;
  res.render('settings', {
	title: 'Twitter',
	username: myUsername
  });
}
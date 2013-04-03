/*
@module routes/profile
*/

var myUsername = null;

//renders profile view 
exports.profile = function(req,res){
  myUsername = req.session.user;
  res.render('profile', {
	title: 'Twitter',
	username: myUsername
  });
}
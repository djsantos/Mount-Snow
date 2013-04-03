/*
@module routes/followers
*/

var myUsername = null;

//renders followers view 
exports.followers = function(req,res){
  myUsername = req.session.user;
  res.render('followers', {
	title: 'Twitter',
	username: myUsername
  });
}
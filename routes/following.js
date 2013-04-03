/*
@module routes/following
*/

var myUsername = null;

//renders following view 
exports.following = function(req,res){
  myUsername = req.session.user;
  res.render('following', {
	title: 'Twitter',
	username: myUsername
  });
}
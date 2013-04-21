/*
@module routes/profile
*/

var myUsername = null;
var myUID = parseInt(-1,10)

//renders profile view 
exports.profile = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  res.render('profile', {
	title: 'Twitter',
	username: myUsername
  });
}
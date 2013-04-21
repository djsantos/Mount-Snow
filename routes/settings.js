/*
@module routes/settings
*/

var myUsername = null;
var myUID =  parseInt(-1,10);

//renders settings view 
exports.settings = function(req,res){
  myUsername = req.session.user;
   myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10))res.redirect('/welcome');
  res.render('settings', {
	title: 'Twitter',
	username: myUsername
  });
}
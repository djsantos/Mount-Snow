/*
@module routes/lists
*/

var myUsername = null;
var myUID = parseInt(-1,10)

//renders lists view 
exports.lists = function(req,res){
  myUsername = req.session.user;
	myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  res.render('lists', {
	title: 'Twitter',
	username: myUsername
  });
}
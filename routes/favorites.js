/*
@module routes/favorites
*/

var myUsername = null;
var myUID = parseInt(-1,10)

//renders favorites view 
exports.favorites = function(req,res){
  myUsername = req.session.user;
    myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  res.render('favorites', {
	title: 'Twitter',
	username: myUsername
  });
}
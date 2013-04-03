/*
@module routes/favorites
*/

var myUsername = null;

//renders favorites view 
exports.favorites = function(req,res){
  myUsername = req.session.user;
  res.render('favorites', {
	title: 'Twitter',
	username: myUsername
  });
}
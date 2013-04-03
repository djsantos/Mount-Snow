/*
@module routes/lists
*/

var myUsername = null;

//renders lists view 
exports.lists = function(req,res){
  myUsername = req.session.user;
  res.render('lists', {
	title: 'Twitter',
	username: myUsername
  });
}
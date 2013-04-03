/*
@module routes/mentions
*/
var myUsername = null;

//renders mentions view

exports.mentions = function(req,res){
  myUsername = req.session.user;
  res.render('mentions', {
	title: 'Twitter',
	username: myUsername
  });
}

exports.connect = function(req,res){
	res.redirect('/connect');
};

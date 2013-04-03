/*
@module routes/connect
*/

var myUsername = null;

//renders connect view
exports.connect = function(req,res){
  myUsername = req.session.user;
  res.render('connect', {
	title: 'Twitter',
	username: myUsername
  });
}

exports.mentions = function(req,res){
	res.redirect('/mentions');
};


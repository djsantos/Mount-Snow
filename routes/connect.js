/*
@module routes/connect
*/

var myUsername = null;

//renders connect view
exports.connect = function(req,res){
  myUsername = req.session.user;
  var myUID = myUsername.uid;
  
  var connectList = discoverLib.displayConnect(myUID);
  res.render('connect', {
	title: 'Twitter',
	username: myUsername,
	connect: connectList
  });
}

exports.mentions = function(req,res){
	res.redirect('/mentions');
};


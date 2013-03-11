exports.signup = function(req,res){
  res.render('signup', {title: 'Twitter'});
}

exports.CreateAccount = function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
    res.redirect('/home'); 
};

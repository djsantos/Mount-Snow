var signupLib = require('../lib/signup');


exports.signup = function(req,res){
	res.render('signup', {title: 'Twitter'});
}

exports.CreateAccount = function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var confirmPassword = req.body.confirmPassword;
	if(signupLib.CreateAccount(name, email, password, confirmPassword, username))
    	res.redirect('/home');
    else res.redirect ('/signup');
};

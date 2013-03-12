/*
@module routes/signup
*/

/*
*requires lib/signup
*/

var signupLib = require('../lib/signup');

/*
*renders the signup view
*/
exports.signup = function(req,res){
	res.render('signup', {title: 'Twitter'});
}

/*
*creates variables for each parameter in the form for signing up
*and creates the account with the input information
*/
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

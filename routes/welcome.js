/** @module my/shirt */
//library dependencies
var wellib = require('../lib/welcome');
var Userlib = require('../lib/user');

/*
 * @EXPORT to app.js
 */

exports.welcome = function(req,res){
	res.render('welcome', {title: 'Twitter'});
};
//login button, will check is both password and name exist and move user to homepage
exports.login = function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
    		
	Userlib.lookup(username, password, function(error, u){
		if(error == 'password is not correct'){
			res.redirect ('/welcome');
			//return false;
		}
		else if(error == 'user not found'){
			res.redirect ('/signup');
			//return false;
		}
		else{
			user = u;
			res.redirect ('/home');
			//return true;
		}
	});
};
//transitions user from the welcome page to the signup page

exports.signup = function(req,res){
	res.redirect('/signup');
};

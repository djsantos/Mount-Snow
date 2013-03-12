/** @module my/shirt */
//library dependencies
var wellib = require('../lib/welcome');

/*
 * @EXPORT to app.js
 */

exports.welcome = function(req,res){
	res.render('welcome', {title: 'Twitter'});
}
//login button, will check is both password and name exist and move user to homepage
exports.login = function (req, res) {
	var name = req.body.username;
	var password = req.body.password;
	if(wellib.login(name,password))
    	res.redirect('/home'); 
    else res.redirect('/welcome');
};
//transitions user from the welcome page to the signup page

exports.signup = function(req,res){
	res.redirect('/signup');
};

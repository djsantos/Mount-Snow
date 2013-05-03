/** @module welcome */
//library dependencies

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./data/temp.db');

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
		}
		else if(error == 'user not found'){
			res.redirect ('/signup');
		}
		else{
			req.session.user = username;
			console.log(req.session.user);
			Userlib.getUid(username, function(error, uid){
				if(error)
					console.log(error);
				else{
					req.session.uid = uid;
					console.log(req.session.uid);
					res.redirect ('/home');
				}
			});
		}
	});
};

//transitions user from the welcome page to the signup page
exports.signup = function(req,res){
	res.redirect('/signup');
};

/** @module welcome */
module.exports = {
	login:login
};

// imports the user library
var Userlib = require('../lib/user')
var user

/** checks for valid username and password*
function login(username, password){
	if(username && password && Userlib.lookup(username, password, function(error, u))){
		if(error == undefined){
			user = u;
			return true;
		}
		else if(error == 'password is not correct')
			return false;
			
		else if(error == 'user not found'){
			u.redirect ('/signup');
			return false;
		}
	}
};*/

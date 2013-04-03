/** @module welcome */
module.exports = {
	login:login
};

// imports the user library
var Userlib = require('../lib/user')
var user

/** checks for valid username and password**/
function login(username, password){
	if(username && password && Userlib.lookup(username, password, passwordCheck))
		return true;
	else
		return false;
};

function passwordCheck(message, u){
	if(message == undefined){
		user = u
		return true;
	}
	else if(message.equals('password is not correct'))
		return false;
	else if(message.equals('user not found')){
		u.redirect ('/signup');
		return false;
	}
		
}

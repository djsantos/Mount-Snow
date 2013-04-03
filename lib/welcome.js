/** @module welcome */
module.exports = {
	login:login
};

// imports the user library
var Userlib = require('../lib/user')

/** checks for valid username and password**/
function login(username, password){
	if(username && password && Userlib.lookup(username, password))
		return true;
	else
		return false;
};

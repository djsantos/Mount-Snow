/** @module welcome */
module.exports = {
	login:login
};

/** checks for valid username and password**/
function login(username, password){
	if(username && password)
		return true;
	else
		return false;
};
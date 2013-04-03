/*
module lib/signup
*/

module.exports = {
  signup:CreateAccount
};
// imports the user library
var Userlib = require('../lib/user')

/*
Creates the account and adds the new user to the user data base
*/

function CreateAccount(name, email, password, confirmPass, username){
	if(name && email && password && confirmPass && (password.localCompare(confirmPass) == 0) && username){
		Userlib.createUser(name,email,password,username);
		console.log(name);
		return true;
	}
	else{
		console.log(password);
		return false;
	}
};

/*
module lib/signup
*/

module.exports = {
  signup:CreateAccount
};

/*
Creates the account!
*/

function CreateAccount(name, email, password, confirmPass, username){
	if(name && email && password == confirmPass && username)
		return true;
	else
		return false;
};

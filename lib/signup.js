module.exports = {
  signup:CreateAccount
};
function CreateAccount(name, email, password, confirmPass, username){
	if(name && email && password == confirmPass && username)
		return true;
	else
		return false;
};

/*
@module routes/signup
*/

/*
*requires lib/signup
*/

var userLib = require('../lib/user');

/*
*renders the signup view
*/
exports.signup = function(req,res){
	res.render('signup', {title: 'Twitter'});
};

/*
*creates variables for each parameter in the form for signing up
*and creates the account with the input information
*/
exports.CreateAccount = function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var confirmPassword = req.body.confirmPassword;
	userLib.createUser(name, email, password, confirmPassword, username, function(error, u){
		if(error == 'passwords not identical'){
			//need to add a message here
    			res.redirect('/signup');
		}
		else if(error == 'username exists'){
			//need to add a message here
    			res.redirect('/signup');
		}
		else if(error == 'email exists'){
			//need to add a message here
    			res.redirect('/signup');
		}
    		else{ 
    			var userID = u;
    			res.redirect('/home');	
    		}
	});
};

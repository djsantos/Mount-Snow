/*
@module routes/signup
*/


var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./users.db');
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
		console.log(error);
		if(!error){ 
			
    			var userID = u;
				req.session.user = username;
				req.session.uid = userID;
			db.run("CREATE TABLE users (info TEXT)");
              		db.run("insert into users values (NULL, ?, ?, ?)", [username, password, email], function (error){
                //if (error){
                  //cb(error);
                //}
               // cb(null, userID);
              });
    			res.redirect('/home');	
    		}
		else if(error.valueOf() == 'passwords not identical'){
			//need to add a message here
    			res.redirect('/signup');
		}
		else if(error.valueOf() == 'username exists'){
			//need to add a message here
    			res.redirect('/signup');
		}
		else if(error.valueOf() == 'email exists'){
			//need to add a message here
    			res.redirect('/signup');
		}

	});
};

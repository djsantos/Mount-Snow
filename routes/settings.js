/*
@module routes/settings
*/

/*
*requires lib/signup
*/

var userLib = require('../lib/user');

var myUsername = null;
var myUID =  parseInt(-1,10);

//renders settings view 
exports.settings = function(req,res){
  myUsername = req.session.user;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10))res.redirect('/welcome');
  res.render('settings', {
	title: 'Twitter',
	username: myUsername
  });
}

exports.updateInfo = function(req,res){
	var username = req.body.settings_username;
	var email = req.body.settings_email;
	var password = req.body.settings_password_new;
	var confirmPassword = req.body.settings_password_confirm;
	console.log('yes');
	var record = db.get("SELECT * FROM UserTable where uid = ?;", [myUID], function(err,row){
  	if(err){
  		console.log('user not found');
  	}
  	else{
  		if(row){
  			console.log(row);
  	 		var user = db.run("select * from UserTable where username = ?", row[username]);
  			console.log(user);
  		}
  		else{
  			console.log('no');
  		}
  	}
  });
};

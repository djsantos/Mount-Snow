/*
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
};

exports.updateInfo = function(req,res){
  myUID = req.session.uid;
  var username = req.body.settings_username;
  var email = req.body.settings_email;
  var currentPassword = req.body.settings_password_current;
  var password = req.body.settings_password_new;
  var confirmPassword = req.body.settings_password_confirm;
  console.log(myUID);
  userLib.updateInfo(myUID, username, email, currentPassword, password, confirmPassword, function(error, uid){
    if(error){
      console.log(error);
    }
    else{
      console.log('changed info for ' + username);
    }
  });
};

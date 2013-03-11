//library dependencies
var wellib = require('../lib/welcome');

exports.welcome = function(req,res){
	res.render('welcome', {title: 'Twitter'});
}
//login button, will check is both password and name exist and move user to homepage
exports.login = function (req, res) {
	var name = req.body.username;
	var password = req.body.password;
	if(wellib.login(name,password))
	//performs function of intended library call until library call is fixed
	//if(name&&password)
    	//res.redirect('/home'); 
    else res.redirect('/welcome');
};

exports.signup = function(req,res){
	res.redirect('/signup');
};

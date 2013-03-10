exports.welcome = function(req,res){
	res.render('welcome', {title: 'Twitter'});
}
//currently does nothing, will need to implement taking user to homepage, login functionality
//code for button
exports.login = function (req, res) {
	var name = req.body.username;
	var password = req.body.password;

    res.redirect('/home'); 
};

exports.signup = function(req,res){
	res.redirect('/signup');
};

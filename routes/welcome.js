exports.welcome = function(req,res){
	res.render('welcome', {title: 'Twitter'});
}
//currently does nothing, will need to implement taking user to homepage, login functionality
app.post('/login', function(req,res)){
res.redirect('/users');
}
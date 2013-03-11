//var melib = require('./lib/me');
exports.me = function(req,res){
	res.render('me', {title: 'Twitter'});
}

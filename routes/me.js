var melib = require('../lib/me');

exports.me = function(req,res){
	var results = melib.tweets();
	res.render('me', {title: 'Twitter',tweets:results});
}
 
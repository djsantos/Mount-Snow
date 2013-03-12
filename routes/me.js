/** @module me */
/*
 * GET library file
 */
var melib = require('../lib/me');


/*
 * @EXPORT to app.js
 */

exports.me = function(req,res){
	//returns tweets for display
	var results = melib.tweets();
	res.render('me', {title: 'Twitter',tweets:results});
}
 
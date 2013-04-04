/** @module me */
/*
 * GET library file
 */
var tweetlib = require('../lib/tweet');
var myUsername = null;
var myUserId = null;

/*
 * @EXPORT to app.js
 */

exports.me = function(req,res){
	myUsername = req.session.user;
	myUserId = req.session.uid;
	//returns tweets for display
	var results = tweetlib.displayMyTweets(myUserId);
	res.render('me', {
		title: 'Twitter',
		username: myUsername,
		tweets:results
	});
}
 

/** @module me */
/*
 * GET library file
 */
var tweetlib = require('../lib/tweet');
var myUsername = null;
var myUID = parseInt(-1,10)

/*
 * @EXPORT to app.js
 */

exports.me = function(req,res){
	myUsername = req.session.user;
	myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
	//returns tweets for display
	var results = tweetlib.displayMyTweets(myUID);
	res.render('me', {
		title: 'Twitter',
		username: myUsername,
		tweets:results
	});
}
 

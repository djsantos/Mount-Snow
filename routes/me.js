/** @module me */
/*
 * GET library file
 */
var tweetlib = require('../lib/tweet');
var myUsername = null;

/*
 * @EXPORT to app.js
 */

exports.me = function(req,res){
	myUsername = req.session.user;
	//returns tweets for display
	var results = tweetlib.displayTweets(myUsername.uid);
	res.render('me', {
		title: 'Twitter',
		username: myUsername,
		tweets:results
	});
}

//adds ability to tweet from the display
exports.tweet = function (req, res) {
	var tweet = req.body.tweet;
	tweetLib.createTweet(tweet);
};
 

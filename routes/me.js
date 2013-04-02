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

//adds ability to tweet from the display
exports.tweet = function (req, res) {
	var tweet = req.body.tweet;
	melib.createTweet(tweet);
};
 

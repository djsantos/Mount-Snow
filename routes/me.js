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
};

exports.deleteTweet = function(req,res){
	var uid = req.session.uid;
	var message = req.session.message;//need to change
	//tweet library call for deleting a tweet
	tweetlib.deleteTweet(message, uid, function(error){
		if(error === 'error'){
			system.log("error deleting tweet " + message);
		}
		else{
			res.redirect('/me');
		}
	});
};
 

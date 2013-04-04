/*
@module routes/home
*/

/*
*requires lib/tweet
*/
var tweetLib = require('../lib/tweet');

var tweetFeed = new Array();
var myUsername = null;
var myTweets = 0;
var myFollowing = 0;
var myFollowers = 0;

/*
*When home is loaded we call the retrieveVariables function
*to assign the various variables. Then render the page.
*/
exports.home = function(req,res){
	myUsername = req.session.user;
	myUserId = req.session.uid;
	retrieveVariables(myUserId);
	res.render('home', {
	title: 'Twitter/Home',
	tweets: myTweets,
	following: myFollowing,
	followers: myFollowers,
	username: myUsername,
	feed:tweetFeed
	});
};

/*
*Calls the database to get the needed values.
*/
function retrieveVariables(myUserId){
	myTweets = tweetLib.tweetCount(myUserId);
	myFollowing = homeLib.numFollowing(myUserId);
	myFollowers = homeLib.numFollowers(myUserId);
	tweetFeed = tweetLib.displayTweets(myUserId);
};


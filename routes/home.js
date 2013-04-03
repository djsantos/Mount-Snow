/*
@module routes/home
*/

/*
*requires lib/tweet
*/
var tweetLib = require('../lib/tweet');
/*
*requires lib/home
*/
var homeLib = require('../lib/home');
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
	retrieveVariables(myUsername);
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
function retrieveVariables(myUsername){
	myTweets = tweetLib.tweetCount(myUsername);
	myFollowing = homeLib.numFollowing(myUsername);
	myFollowers = homeLib.numFollowers(myUsername);
	tweetFeed = tweetLib.displayTweets(myUsername);
};


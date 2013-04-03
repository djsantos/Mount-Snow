/*
@module routes/home
*/


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
	retrieveVariables();
	myUsername = req.session.user;
	res.render('home', {
	title: 'Twitter/Home',
	tweets: myTweets,
	following: myFollowing,
	followers: myFollowers,
	username: myUsername,
	feed:tweetFeed
	});
}

/*
*Calls the database to get the needed values.
*/
function retrieveVariables(){
	myTweets = homeLib.numTweets();
	myFollowing = homeLib.numFollowing();
	myFollowers = homeLib.numFollowers();
	tweetFeed = homeLib.getTweetFeed();
}


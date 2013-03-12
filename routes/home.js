var homeLib = require('../lib/home');
var tweetFeed = new Array();
var myUsername = null;
var myTweets = 0;
var myFollowing = 0;
var myFollowers = 0;

exports.home = function(req,res){
	retrieveVariables();
	res.render('home', {
	title: 'Twitter/Home',
	tweets: myTweets,
	following: myFollowing,
	followers: myFollowers,
	username: myUsername,
	feed:tweetFeed
	});
}
function retrieveVariables(){
	myTweets = homeLib.numTweets();
	myFollowing = homeLib.numFollowing();
	myFollowers = homeLib.numFollowers();
	myUsername = homeLib.getUsername();
	tweetFeed = homeLib.getTweetFeed();
}


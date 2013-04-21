/*
@module routes/home
*/

/*
*requires lib/tweet
*/
var tweetLib = require('../lib/tweet');
/*
*requires lib/follow
*/
var followLib = require('../lib/follow');

var tweetFeed = new Array();
var myUsername = null;
var myTweets = 0;
var myFollowing = 0;
var myFollowers = 0;
var myUID = parseInt(-1,10)

/*
*When home is loaded we call the retrieveVariables function
*to assign the various variables. Then render the page.
*/
exports.home = function(req,res){
	myUsername = req.session.user;
	myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome')
	retrieveVariables(myUID);
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
function retrieveVariables(myUID){
	myTweets = tweetLib.tweetCount(myUID);
	myFollowing = followLib.peopleYouFollowCount(myUID);
	myFollowers = followLib.followersCount(myUID);
	tweetFeed = tweetLib.displayTweets(myUID);
};


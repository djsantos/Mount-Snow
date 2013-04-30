// library dependencies
var Tweetlib = require('../lib/tweet');

var message = "Tweets can be up to 140 characters.";
var defaultValue = "Enter Tweet Here.";
var myUID = parseInt(-1,10)

// Records all the posts made to the server:
var posts = [];

// Represents a post:
function Post(text, uid) {
	this.text = text;
	this.uid = uid;
}

//renders the compose tweet page

exports.compose = function(req,res){
	var myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
	res.render('compose', {
		title: 'Twitter',
		message: message,
		value: defaultValue
	});
};

// The post function will handle incoming posts and store them
// into the posts array. The client is expected to send a post
// request containing a single object: { text : <value> }.
exports.post = function (req, res) {
	var tweet = req.body.tweet;
	myUID = req.session.uid;
	Tweetlib.createTweet(tweet, myUID, function(error, id){
		if(error == 'too long'){
			message = "Your tweet was too long. Please try again.";
			//stores invalid tweet so that user may edit any mistakes
			defaultValue = tweet;
			res.redirect('/compose');
			return;
		}
		else if(error == 'invalid tweet'){
			message = "Make sure you are logged in, have entered text in the field, and please try again.";
			//stores invalid tweet so that user may edit any mistakes
			defaultValue = tweet;
			res.redirect('/compose');
			return;
		}
		else if(error == 'not following'){
			message = "You can not tweet at a user you are not following. Visit the Find Friends Page under Discover to follow other users.";
			//stores invalid tweet so that user may edit any mistakes
			defaultValue = tweet;
			res.redirect('/compose');
			return;
		}
		else{
			//returns user to the me page if the tweet was valid
			message = "Tweets can be up to 140 characters.";
			//library call for adding tweet to database object added here
			//post objects are properly added to the posts variable above
			console.log('received post: ' + tweet);
			posts.push(new Post(tweet,id));
			res.json({ status: 'OK'});
			console.log(posts);
			defaultValue = "Enter Tweet Here.";
			res.redirect('/me');
		}
});
};

// The check function is used to check how many new posts are
// available given the last post the client has. The client is
// expected to send a post request with a JSON body containing
// a single object: { last : <value> }.
exports.check = function (req, res) {
	var last = parseInt(req.body.last, 10);
	var rest = posts.slice(last, posts.length);
	//myUID = req.session.uid;
	//var rest = Tweetlib.displayTweets(myUID);
	console.log(rest);
	res.json(rest);
};


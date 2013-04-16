// library dependencies
var Tweetlib = require('../lib/tweet');
var message = "Tweets can be up to 140 characters.";

// Records all the posts made to the server:
var posts = [];

// Represents a post:
function Post(text, uid) {
	this.text = text;
	this.uid = uid;
}

//renders the compose tweet page

exports.compose = function(req,res){
	console.log('composing');
	res.render('compose', {
		title: 'Twitter',
		message: message
	});
};

// The post function will handle incoming posts and store them
// into the posts array. The client is expected to send a post
// request containing a single object: { text : <value> }.
exports.post = function (req, res) {
	var tweet = req.body.tweet;
	var uid = req.session.uid;
	//library call for adding tweet to database object added here
	//post objects are properly added to the posts variable above
	//page is the redirected back to compose, this we may want to change the functionality of
	console.log('received post: ' + tweet);
	posts.push(new Post(tweet,uid));
	
	res.json({ status: 'OK'});
	console.log(posts);
	res.redirect('/compose');
};

// The check function is used to check how many new posts are
// available given the last post the client has. The client is
// expected to send a post request with a JSON body containing
// a single object: { last : <value> }.
exports.check = function (req, res) {
	/*Tweetlib.createTweet(tweet, uid, function(error, uid){
		if(error === 'too long'){
			message = "Your tweet was too long. Please try again.";
			res.redirect('/compose');
		}
		else if(error === 'invalid tweet'){
			message = "Make sure you are logged in, have entered text in the field, and please try again.";
			res.redirect('/compose');
		}
		else{
			//returns user home if the tweet was valid
			//postTweet(uid,tweet,undefined);
			message = "Tweets can be up to 140 characters.";
			res.redirect ('/me');
		}
	});*/
	var last = parseInt(req.body.last, 10);
	var rest = posts.slice(last, posts.length);
	res.json(rest);
};

/* Basically just took the example from the wikinotes
and tried to adapt it to posting a tweet to the server.
Still not sure how to get this to work
var postTweet = function (uid, tweet, callback) {
    // New request:
    var req = new XMLHttpRequest();
 
    // Get to server-side program:
    //not sure what the second argument should be.
      req.open('POST', '/tweet/json');
 
    //REDACTED (SEE BELOW)
 
    // Set content type header field to JSON MIME type:
    //not sure what the second argument should be.
    req.setRequestHeader('Content-Type', '/package.json');
 
    // Construct a message to send to the server:
    
    /*I'm assuming we want to construct a message with the ID
    of the person tweeting and the tweet they created and send
    that message to the server
    var msg = { userID: uid,  tweet: tweet};
 
    // Send request:
    req.send(JSON.stringify(msg));
  }*/


/*exports.tweet = function(req,res){
	var tweet = req.body.tweet;
	var uid = req.session.uid;
	//library call for adding tweet to database object added here
	Tweetlib.createTweet(tweet, uid, function(error, uid){
		if(error == 'too long'){
			message = "Your tweet was too long. Please try again.";
			res.redirect('/compose');
		}
		else if(error == 'invalid tweet'){
			message = "Make sure you are logged in, have entered text in the field, and please try again.";
			res.redirect('/compose');
		}
		else{
			//returns user home if the tweet was valid
			//postTweet(uid,tweet,undefined);
			message = "Tweets can be up to 140 characters.";
			res.redirect ('/me');
		}
});
};*/

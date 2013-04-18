// library dependencies
var Tweetlib = require('../lib/tweet');
var user = require('../lib/user');

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
	var userName = new String(tweet);
	var uid = req.session.uid;
	var done = false;

	while(!done){
		done = true;
		if(userName.indexOf("@") !== -1){
			userName = userName.slice(userName.indexOf("@")+1);
			console.log(userName);
			if(userName.indexOf("@") !== -1){
				var temp = userName.slice(0, userName.indexOf(" "));
				console.log(temp);
				uid = user.getUid(temp);
				console.log(uid);
				done = false;
			}
			else{
				uid = user.getUid(userName);
				console.log(uid);
			}
		}
		else{	
			console.log(uid);
		}
		
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
			message = "Tweets can be up to 140 characters.";
			//library call for adding tweet to database object added here
			//post objects are properly added to the posts variable above
			//page is the redirected back to compose, this we may want to change the functionality of
			console.log('received post: ' + tweet);
			posts.push(new Post(tweet,uid));
			res.json({ status: 'OK'});
			console.log(posts);
			res.redirect ('/me');
		}
});
}};

// The check function is used to check how many new posts are
// available given the last post the client has. The client is
// expected to send a post request with a JSON body containing
// a single object: { last : <value> }.
exports.check = function (req, res) {
	var last = parseInt(req.body.last, 10);
	var rest = posts.slice(last, posts.length);
	res.json(rest);
};


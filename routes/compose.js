// library dependencies
var Tweetlib = require('../lib/tweet');
var message = "Tweets can be up to 140 characters.";

//renders the compose tweet page

exports.compose = function(req,res){
	console.log('composing');
	res.render('compose', {
		title: 'Twitter',
		message: message
	});
};
exports.tweet = function(req,res){
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
			message = "Tweets can be up to 140 characters.";
			res.redirect ('/me');
		}
});
};

// library dependencies
var Tweetlib = require('../lib/tweet');

//renders the compose tweet page

exports.compose = function(req,res){
	console.log('composing');
	res.render('compose', {title: 'Twitter'});
};
exports.tweet = function(req,res){
	var tweet = req.body.tweet;
	var uid = req.session.user.userid;
	//library call for adding tweet to database object added here
	Tweetlib.createTweet(tweet, uid, function(error, u){
		if(error == 'too long'){
			//display a message
		}
		else if(error == 'invalid tweet'){
			//display a message
		}
		else{
			//returns user home if the tweet was valid
			res.redirect ('/home');
		}
});
};

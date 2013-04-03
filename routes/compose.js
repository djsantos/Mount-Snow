// library dependencies
var Tweetlib = require('../lib/tweet');

//renders the compose tweet page

exports.compose = function(req,res){
	console.log('bye2');
	res.render('compose', {title: 'Twitter'});
};
//read
exports.tweet = function(req,res){
	tweet = req.body.tweet;
	//library call for adding tweet to database object added here
	Tweetlib.createTweet(tweet,uid,cb);
	//returns user home once tweet has been posted
	res.redirect('/home');
};
/*
 * GET DirectMessage file
 */
var messageLib = require('../lib/directMessage');
var user = require('../lib/user');

var message;
var myUID = parseInt(-1,10);
var to;

// Records all the posts made to the server:
var posts = [];

// Represents a post:
function Post(message, myUid, to) {
	this.message = message;
	this.myUid = myUid;
	this.to = to;
}

//renders the directMessage page

exports.directMessage = function(req,res){
	var myUID = req.session.uid;
	var inbox = messageLib.recievedMessages(myUID);
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
	res.render('directMessage', {
		title: 'Twitter',
		to: user.getUid(to),
		message: message,
		inbox: inbox,
	});
};


exports.createMessage = function (req, res) {
	var message = req.body.message;
	myUID = req.session.uid;
	messageLib.createMessage(message, myUID, to, function(error, id){
		console.log('hello');
		if(error){
			console.log(error);
			res.redirect('/directMessage');
			return;
		}
		else{
			console.log('received message: ' + message);
			posts.push(new Post(message,myUid, to));
			res.json({ status: 'OK'});
			console.log(posts);
			res.redirect('/directMessage');
		}
	});
};

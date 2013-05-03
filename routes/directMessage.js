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
	myUID = req.session.uid;
	var to = user.getUid(req.body.to);
	var inbox = messageLib.recievedMessages(myUID);
	var outbox = messageLib.sentMessages(myUID);
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
	res.render('directMessage', {
		title: 'Twitter',
		to: to,
		message: message,
		inbox: inbox,
		outbox: outbox,
	});
};


exports.createMessage = function (req, res) {
	var message = req.body.message;
	myUID = req.session.uid;
	var to = user.getUid(req.body.to);
	messageLib.createMessage(message, myUID, to, function(error, id){
		if(error){
			console.log(error);
			res.redirect('/directMessage');
			return;
		}
		else{
			console.log('sent message: ' + message);
			res.redirect('/directMessage');
		}
	});
};

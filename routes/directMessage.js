*/

/*
 * GET DirectMessage file
 */
var messageLib = require('../lib/directMessage');
var user = require('../lib/user');

var message = null;
var myUID = parseInt(-1,10);
var 

//renders sent view

exports.sent = function(req,res){
  myUsername = req.session.message;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) 
    res.redirect('/welcome');
  var sentList = messageLib.sentMessages(myUID);
  res.render('messages', {
	title: 'Twitter',
	username: user.getUserName(myUID),
	messages: sentList
  });
};

//renders recieved view

exports.recieved = function(req,res){
  myUsername = req.session.message;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) 
  	res.redirect('/welcome');
  var recievedList = messageLib.recievedMessages(myUID);
  res.render('messages', {
	title: 'Twitter',
	username: user.getUserName(myUID),
	messages: recievedList
  });
};

//renders conversation view

exports.conversation = function(req,res){
  myUsername = req.session.message;
  myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) 
  	res.redirect('/welcome');
  var conversation = messageLib.displayConversation(myUID, myUID2);
  res.render('messages', {
	title: 'Twitter',
	sender: user.getUserName(myUID),
	reciever: user.getUserName(myUID2),
	messages: conversation
  });
};

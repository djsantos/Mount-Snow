var user = require('../lib/user');

// # DirectMessage object
function DirectMessage(message, uid, uid2){
this.message = message;
this.uid = uid;//uid of sender of the direct message
this.uid2 = uid2;//uid of reciever of the direct message
}



//database of messages
var messages = [ 
new DirectMessage('Hi, my name is daniel', 1, 2),
new DirectMessage('Hi, my name is dante', 2, 1),
];

//returns messages recieved by the user with id id
exports.recievedMessages = function(id){
  var result = [];
	var len = messages.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === messages[i].uid2)
    		result.push(messages[i].message);
    }
    return result;
};

//returns messages sent by the user with id id
exports.sentMessages = function(id){
	var result = [];
	var len = messages.length;
  	for (var i = len-1; i >= 0; i--) {
		if(id === messages[i].uid)
    		result.push(messages[i].message);
    }
    return result;
};

//returns messages sent or recieved by either user id or id2
exports.displayConversation = function(id, id2){
	var result = [];
	var len = messages.length;
  	for (var i = len-1; i >= 0; i--) {
		if(((id === messages[i].uid) && (id2 === messages[i].uid2)) || 
		((id === messages[i].uid2) && (id2 === messages[i].uid)))
    		result.push(messages[i].message);
    }
    return result;
};

//adds tweet to the tweets database
exports.createMessage = function(message, id, id2, cd){
	if(!message)
		cb('no message');
	else if(!id || (user.getUsername(id) === -1))
		cb('id not valid');
	else if(!id2 || (user.getUsername(id2) === -1))
		cb('id2 not valid');
	else
		cb(undefined, id, id2);
};

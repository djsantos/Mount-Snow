// # User Library

var async   = require('async');

// ## User Objects
function User(username, name, password,email, uid) {
  this.username = username;
  this.name = name;
  this.password = password;
  this.uid = uid;
  this.email = email;
}

// This is our stub database until we look at a real database!
//need to have additional users created
var userdb = [
  new User('slastic','Dan', 'Santos','djsantos@student.umass.edu', 1),
  new User('dante', 'Dante', 'password', 'ddebened@student.umass.edu', 2),
  new User('maxwell24', 'Maxwell', 'Bohling', 'mbohling@student.umass.edu', 3),
  new User('bmentz', 'Bridgette', 'nimda', 'bmentzer@student.umass.edu', 4)
];

exports.getUserDB = function(){
	return userdb;
};

//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//
exports.lookup = function(username, password, cb) {
		var len = userdb.length;
		for(i=0; i<len; i++){
			//found the user
			if(userdb[i].username==username){
				if(userdb[i].password==password){
					cb();
					return;
				}
				else{
					cb('password is not correct');
					return;
				}
			}
		}
		//didn't find the user
		cb('user not found');
		return;
};


//returns a list of all users
exports.displayAllUsers = function(id){
	var result = [];
	var len = userdb.length;
  	for (var i = 0; i < len; i++) {
		result.push(userdb[i].username);
  	}
      	return result;
};

//returns the username of the user with uid id
exports.getUsername = function(id){
	for(var x = 0; x < userdb.length; x++){
		if(userdb[x].uid === id)
			return userdb[x].username;
	}
	return -1;
};

//returns the uid of the user with username name
exports.getUid = function(name, cb){
	for(var x = 0; x < userdb.length; x++){
		if(userdb[x].username === name)
			return userdb[x].uid;
	}
	return -1;
};

//
// ## createUser function
// creates a user if the username and email doesn't already exist
//Invokes callback `cb` with the signature cb(error, userobj).
//
exports.createUser = function(name,email ,password, confirmPassword, username, cb){
	var len = userdb.length;
	if(password !== confirmPassword){
		cb('passwords not identical');
		return;
	}
	for (var i = 0; i < len; i++) {
		var u = userdb[i];
		if (u.username === username) {
			cb('username exists');
			return;
		}
		else if (u.email === email) {
			cb('email exists');
			return;
		}
	}
    var uid = userdb.length + 1;
    userdb.push(new User(username, name, password, email, uid));
	cb();
	return;
};

exports.updateInfo = function(uid, name, email, password_current, password, password_confirm, cb){
  
  };

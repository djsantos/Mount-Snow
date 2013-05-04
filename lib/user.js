// # User Library
// # User Library

var sqlite3 = require('sqlite3');
var async   = require('async');
var db = new sqlite3.Database('./data/temp.db');
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
  var record = db.get("SELECT * FROM UserTable where username = ?;", [username], function(err,row){
  /*	if(err){
  		cb('user not found');
  	}
  	else{*/
  		if(row){
  			console.log(row);
  		//if(row['uid']){
  	 		var user = db.run("select * from UserTable where username = ?", row['username']);
  			cb(undefined, user);
  		}
  		else{
  			cb('user not found');
  		}
  });
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
	
	var record = db.get("SELECT * FROM UserTable where username = ?;", [name], function(err,row){
  /*	if(err){
  		cb('user not found');
  	}
  	else{*/
  		if(row){
  			cb(undefined, row['uid']);
  			return;
  			
  		}
	});
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
   var unique = db.run("SELECT COUNT(*) FROM UserTable;");
                unique = parseInt(unique);
                db.run("CREATE TABLE IF NOT EXISTS UserTable (uid INTEGER PRIMARY KEY autoincrement,username VARCHAR(30) not null,password VARCHAR(30) not null,email VARCHAR(30) not null);");
                    async.series([
            function (callback){
              db.run("insert into UserTable values (?, ?, ?, ?)", [unique, username, password, email]);
              var uid = db.get("select * from UserTable where uid=(select MAX(uid) from UserTable)");
              cb(undefined, uid);
            }]);

};

exports.updateInfo = function(uid, name, email, password_current, password, password_confirm, cb){
  var record = db.get("SELECT * FROM UserTable where uid = ?;", [uid], function(err,row){
    if(err){
      console.log('user not found');
      cb('user not found');
      return;
    }
    else{
      if(row){
        console.log(row['username']);
        if(name && (name !== row['username']))
          db.run("update UserTable SET username=name WHERE uid=uid;");
        console.log(row['email']);
        if(email && (email !== row['email']))
          db.run("update UserTable SET email=email WHERE uid=uid;");
        console.log(row['password']);
        if((password === password_confirm) && (password_current === row['password']) && (password !== password_current))
          db.run("update UserTable SET password=password WHERE uid=uid;");
      }
      else{
        console.log('error');
        cb('error');

      }
    }
  });
};

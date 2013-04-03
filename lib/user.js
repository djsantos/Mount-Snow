// # User Library


// ## User Objects
function User(username, name, password,email, uid) {
  this.username = username;
  this.name = name;
  this.password = password;
  this.uid      = uid;
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

//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//
exports.lookup = function(username, password, cb) {
  var len = userdb.length;
  for (var i = 0; i < len; i++) {
    var u = userdb[i];
    if (u.username === username) {
      if (u.password === password) {
        //if(cb)
          cb(undefined, u);
        //else
        //  return true;
      }
      else {
       // if(cb)
          cb('password is not correct');
        //else
         //return false;
      }
      return;
    }
  }
  //if(cb)
    cb('user not found');
  //else
    //return false;
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
  }
  for (var i = 0; i < len; i++) {
    var u = userdb[i];
    if (u.username === username) {
          cb('username exists');
    }
    else if (u.email === email) {
          cb('email exists');
    }
    else{
      var uid = userdb.length + 1;
      cb(undefined, uid);
      userdb.push(new User(username, name, password, email, uid));
    }
  }
};

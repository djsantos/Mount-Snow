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
  new User('maxwell24', 'Maxwell', 'Bohling', 'mbohling@student.umass.edu', 3)
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
        if(cb)
          cb(undefined, u);
        else
          return true;
      }
      else {
        if(cb)
          cb('password is not correct');
        else
          return false;
      }
      return;
    }
  }
  if(cb)
    cb('user not found');
  else
    return false;
};

exports.createUser = function(name,email,password,username){
  var uid = userdb.length + 1;
  userdb.push(new User(username, name, password, email, uid));
};

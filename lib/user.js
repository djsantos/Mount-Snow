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
        cb(undefined, u);
      }
      else {
        cb('password is not correct');
      }
      return;
    }
  }
  cb('user not found');
};

exports.createUser = function(name,email,password,username){
  var uid = userdb.length + 1;
  userdb.add(new User(username, name, password, email, uid));
};

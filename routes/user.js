/*
 * GET users listing.
 */

var userlib = require('../lib/user');

// A logged in "database":
var online = {};

// # User Server-Side Routes

// ##list
//displays list of users
exports.list = function(req, res){
  var display = userlib.list();
  res.render('users/usersList', {title: 'User List', func: 'me', data: display});
};

// ## login
// Provides a user login view.
exports.login = function(req, res){
  // Grab any messages being sent to use from redirect.
  var authmessage = req.flash('auth') || '';

  // TDR: redirect if logged in:
  var user  = req.session.user;

  // TDR: If the user is already logged in - we redirect to the
  // main application view. We must check both that the `userid`
  // and the `online[userid]` are undefined. The reason is that
  // the cookie may still be stored on the client even if the
  // server has been restarted.
  if (user !== undefined && online[user.uid] !== undefined) {
    res.redirect('/home');
  }
  else {
    // Render the login view if this is a new login.
    res.render('login', { title   : 'User Login',
                          message : authmessage });
  }
};

// ## auth
// Performs **basic** user authentication.
exports.auth = function(req, res) {
  // TDR: redirect if logged in:
  var user = req.session.user;

  // TDR: do the check as described in the `exports.login` function.
  if (user !== undefined && online[user.uid] !== undefined) {
    res.redirect('/home');
  }
  else {
    // Pull the values from the form.
    var username = req.body.username;
    var password = req.body.password;
    // Perform the user lookup.
    userlib.lookup(username, password, function(error, user) {
      if (error) {
        // If there is an error we "flash" a message to the
        // redirected route `/login`.
        req.flash('auth', error);
        res.redirect('/login')
      }
      else {
        req.session.user = user;
        // Store the user in our in memory database.
        online[user.uid] = user;
        // Redirect to home.
        res.redirect('/home');
      }
    });
  }
};


// ## logout
// Deletes user info & session - then redirects to login.
exports.logout = function(req, res) {
  var user = req.session.user;
  if (user === undefined || online[user.uid] === undefined) {
    req.flash('auth', 'Not logged in!');
    res.redirect('/login');
    return;
  }

  if (online[user.uid] !== undefined) {
    delete online[user.uid];
  }

  delete req.session.user;
  res.redirect('/login');
};

// ## main
// The main user view.
exports.main = function(req, res) {
  // TDR: added session support
  var user = req.session.user;
  if (user === undefined || online[user.uid] === undefined) {
    req.flash('auth', 'Not logged in!');
    res.redirect('/login');
  }
  else {
    res.render('main', { title   : 'User Main',
                         message : 'Login Successful',
                         username : user.username,
                         password : user.password });
  }
};

//## online
//displays the users that are online
exports.online = function(req, res) {
  res.render('online', { title : 'Users Online',
                         users : online });
};

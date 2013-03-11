/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , welcome = require('./routes/welcome')
  , me = require('./routes/me')
  , signup = require('./routes/signup')
  , connect = require('./routes/connect')
  , discover = require('./routes/discover')
  , search = require('./routes/search')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});
//redirects to our welcome page
app.get('/', function(req, res){
  res.redirect('/welcome');
});
//app.get('/', routes.index);
app.get('/users', user.list);
app.get('/signup', signup.signup);
app.get('/welcome', welcome.welcome);
app.post('/login', welcome.login);
app.post('/signup-trans',welcome.signup);
app.post('/signup', signup.CreateAccount);
app.get('/me', me.me);
app.get('/connect', connect.connect)
app.post('/interactions', connect.interactions)
app.get('/discover', discover.discover)
app.post('/activity', discover.activity)
app.post('/findFriends', discover.findFriends)
app.post('/browseCategories', discover.browseCategories)
app.get('/search', search.search);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

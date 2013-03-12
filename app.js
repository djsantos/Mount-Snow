/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , welcome = require('./routes/welcome')
  , me = require('./routes/me')
  , help = require('./routes/help')
  , signup = require('./routes/signup')
  , connect = require('./routes/connect')
  , mentions = require('./routes//connect/mentions')
  , discover = require('./routes/discover')
  , activity = require('./routes/discover/activity')
  , findFriends = require('./routes/discover/findFriends')
  , browseCategories = require('./routes/discover/browseCategories')
  , search = require('./routes/search')
  , home = require('./routes/home')
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
app.get('/connect/mentions', mentions.mentions)
app.get('/discover', discover.discover)
app.get('/discover/activity', activity.activity)
app.get('/discover/findFriends', findFriends.findFriends)
app.get('/discover/browseCategories', browseCategories.browseCategories)
app.get('/search', search.search);
app.get('/home', home.home);
app.get('/help', help.help);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

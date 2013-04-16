/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , welcome = require('./routes/welcome')
  , me = require('./routes/me')
  , lists = require('./routes/lists')
  , favorites = require('./routes/favorites')
  , following = require('./routes/following')
  , followers = require('./routes/followers')
  , help = require('./routes/help')
  , signup = require('./routes/signup')
  , connect = require('./routes/connect')
  , mentions = require('./routes/mentions')
  , discover = require('./routes/discover')
  , activity = require('./routes/activity')
  , findFriends = require('./routes/findFriends')
  , browseCategories = require('./routes/browseCategories')
  , search = require('./routes/search')
  , home = require('./routes/home')
  , settings = require('./routes/settings')
  , profile = require('./routes/profile')
  , path = require('path')
  , compose = require('./routes/compose');

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
app.get('/lists', lists.lists);
app.get('/favorites', favorites.favorites);
app.get('/following', following.following);
app.get('/followers', followers.followers);
app.get('/connect', connect.connect)
app.get('/mentions', mentions.mentions)
app.get('/discover', discover.discover)
app.get('/activity', activity.activity)
app.get('/findFriends', findFriends.findFriends)
app.get('/browseCategories', browseCategories.browseCategories)
app.get('/search', search.search);
app.get('/home', home.home);
app.get('/help', help.help);
app.get('/settings', settings.settings);
app.get('/profile', profile.profile);

//Post Tweet
app.get('/compose', compose.compose);
app.post('/post', compose.post);
app.post('/check', compose.check);
//app.post('/compose', compose.tweet);

app.get('/signout', function(req, res){
  req.session.user = null;
  req.session.uid = null;
  res.redirect('/welcome');
});


var server = http.createServer(app);

var io = require('socket.io').listen(server);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

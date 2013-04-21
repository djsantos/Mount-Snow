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
app.get('/connect', connect.connect);
app.get('/mentions', mentions.mentions);
app.get('/discover', discover.discover);
app.get('/activity', activity.activity);
app.get('/findFriends', findFriends.findFriends);
app.post('/findFriends', findFriends.follow);
app.get('/browseCategories', browseCategories.browseCategories);
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
io.set('log level', 1);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//array to hold list of all users on the find friends page
var onFind= new Array();
//array to hold list of all users on the followers page
var onFollow= new Array();
//array to hold list of all users on the activity page
var onActivity= new Array();


io.sockets.on('connection', function (socket){
	socket.on('setUp', function(data){
		var id = data[0];
		var page = data[1];
		info = { id : id,
				 page : page};
		if(page === 'Find Friends')onFind.push(id);
		else if(page === 'Followers') onFollow.push(id);
		else if(page === 'Activity') onActivity.push(id);
		console.log('user ' + id + ' is on page ' + page);
		socket.set('info', info, function () {
		});
		
	});
	
	

	
	socket.on('disconnect', function () {
     //gets the id of the session that has disconnected so that the correct user is removed
		socket.get('info', function (err, info) {
			var page = info.page;
			if(page === 'Find Friends'){
				var index = onFind.indexOf(info.id);
				onFind.splice(index, 1);
			}
			else if(page === 'Followers'){
				var index = onFollow.indexOf(info.id);
				onFollow.splice(index, 1);
			}
			else if(page === 'Activity'){
				var index = onActivity.indexOf(info.id);
				onActivity.splice(index, 1);
			}
			console.log('user ' + info.id + ' has left page ' + page);
		});
	 });
});

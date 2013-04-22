/*
@module routes/favorites
*/

/*
* requires /lib/favorites
*/
var favoritesLib = require('../lib/favorites');
var favoritesList = new Array();

var myUsername = null;
var myUID = parseInt(-1,10)

//renders favorites view 
exports.favorites = function(req,res){
  myUsername = req.session.user;
    myUID = req.session.uid;
  if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
  favoritesList = favoritesLib.displayMyFavorites(myUID);
  res.render('favorites', {
	title: 'Twitter',
	username: myUsername,
	feed: favoritesList
  });
}
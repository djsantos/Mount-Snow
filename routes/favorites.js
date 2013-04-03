/*
@module routes/favorites
*/

//renders favorites view 
exports.favorites = function(req,res){
  res.render('favorites', {title: 'Twitter'});
}
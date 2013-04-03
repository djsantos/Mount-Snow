/*
@module routes/followers
*/

//renders followers view 
exports.followers = function(req,res){
  res.render('followers', {title: 'Twitter'});
}
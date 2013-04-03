/*
@module routes/following
*/

//renders following view 
exports.following = function(req,res){
  res.render('following', {title: 'Twitter'});
}
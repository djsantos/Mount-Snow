/*
@module routes/profile
*/

//renders profile view 
exports.profile = function(req,res){
  res.render('profile', {title: 'Twitter'});
}
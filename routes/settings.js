/*
@module routes/settings
*/

//renders settings view 
exports.settings = function(req,res){
  res.render('settings', {title: 'Twitter'});
}
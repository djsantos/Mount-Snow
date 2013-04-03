/*
@module routes/lists
*/

//renders lists view 
exports.lists = function(req,res){
  res.render('lists', {title: 'Twitter'});
}
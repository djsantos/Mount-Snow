/*
*module routes/help
*/

/*renders the help view*/
exports.help = function(req,res){
  res.render('help', {title: 'Twitter'});
}

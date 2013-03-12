/*
@module routes/mentions
*/

//renders mentions view

exports.mentions = function(req,res){
  res.render('mentions', {title: 'Twitter'});
}

exports.connect = function(req,res){
	res.redirect('/connect');
};

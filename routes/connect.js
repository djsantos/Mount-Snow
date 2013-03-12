exports.connect = function(req,res){
  res.render('connect', {title: 'Twitter'});
}

exports.mentions = function(req,res){
	res.redirect('/mentions');
};

exports.interactions = function(req,res){
	res.redirect('/interactions');
};
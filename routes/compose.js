
//renders the compose tweet page

exports.compose = function(req,res){
	console.log('bye2');
	res.render('compose', {title: 'Twitter'});
};
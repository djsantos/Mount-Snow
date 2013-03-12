var searchLib = require('../lib/search');
var searchResults = new Array();

exports.search = function(req,res){
	retrieveResults(req);
	res.render('search', {
	title: 'Twitter/Search',
	searchContent: searchResults
	});
}
function retrieveResults(req){
	var requestParam = req.param('q');
	if(requestParam == null) searchResults[0] = 'Please submit a search.';
	else searchResults = searchLib.findResults(requestParam);
	console.log('search query = ' + requestParam);
}


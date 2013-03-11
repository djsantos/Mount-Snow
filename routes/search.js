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
	if(requestParam == null) searchResults = 'Please enter a search.';
	else searchResults = searchLib.findResults(requestParam);
	
	/*var results = searchData(requestParam);*/
	/*var results = null;*/
	/*var results = new Array("bob","joe","larry");
	
	if(results == null) displayDefault();
	else displayResults(results);*/
	console.log('search query = ' + requestParam);
	
	/*res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('you searched for "'+requestParam+'"');
	res.end();*/
}


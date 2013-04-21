/*
*@module routes/search
*/

/*
*requires lib/search
*/
var searchLib = require('../lib/search');
var searchResults = new Array();
var myUsername = null;
var myUID = parseInt(-1,10);

/*
*When search is loaded we call the retrieveResults function
*to assign the searchResults variable. Then render the page.
*/
exports.search = function(req,res){
 	myUsername = req.session.user;
	myUID = req.session.uid;
	if(myUID ===  parseInt(-1,10)) res.redirect('/welcome');
	retrieveResults(req);
  	res.render('search', {
	title: 'Twitter',
	username: myUsername,
	searchContent: searchResults
	});
}


/*
*Calls the database to get the results if a query was passed.
*/
function retrieveResults(req){
	var requestParam = req.param('q');
	if(requestParam == '') searchResults[0] = 'Please submit a search.';
	else if(requestParam == null) searchResults[0] = 'Please submit a search.';
	else searchResults = searchLib.findResults(requestParam);
	console.log('search query = ' + requestParam);
}


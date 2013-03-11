module.exports = {
	findResults:findResults
};

function findResults(requestParam){
	var result = 'You have searched for ' + requestParam;
	return result;
}
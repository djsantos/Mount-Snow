// # discover Library


// ## Disocver Objects
function Discover(message, uid) {
  this.message = message;
  this.uid = uid;
}

// This is our stub database until we look at a real database
var discover = [
  new Discover('What is happening now, tailored for you', 1),
  new Discover('What is happening now, tailored for you', 2),
  new Discover('What is happening now, tailored for you', 3),
  new Discover('What is happening now, tailored for you', 4)
];

//returns the discover tweets to display
exports.displayDiscover = function(id){
  var result = [];
	for(var x = 0; x < discover.length; x++) {
		if(discover[x].uid == id)
			result.push(discover[x].message);
	}
	return result;
};

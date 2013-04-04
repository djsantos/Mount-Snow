// # Connect Library


// ## Connect Objects
function Connect(message, uid) {
  this.message = message;
  this.uid = uid;
}

// This is our stub database until we look at a real database
var connect = [
  new Connect('What is happening now, tailored for you', 1),
  new Connect('What is happening now, tailored for you', 2),
  new Connect('What is happening now, tailored for you', 3),
  new Connect('What is happening now, tailored for you', 4),
];

//returns the connect tweets to display
exports.displayConnect = function(id){
  var result = [];
  for(var x = 0; x < connect.length; x++) {
		if(connect[x].uid == id)
			result.push(connect[x].message);
	}
	return result;
};

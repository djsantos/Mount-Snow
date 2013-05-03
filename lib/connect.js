// # Connect Library


// ## Connect Objects
function Connection(message, uid, username) {
  this.message = message;
  this.uid = uid;
  this.username = username;
};

// # Hashtag Objects
function Hashtag(message, username, tag) {
  this.message = message;
  this.username = username;
  this.tag = tag;
};

// This is our stub database until we look at a real database
var connect = [
  new Connection("@slastic Hi Dan", 1, "bmentz"),
  new Connection("@dante Hi Dante", 2, "slastic"),
  new Connection("@maxwell24 Hi Max", 3, "dante"),
  new Connection("@bmentz Hi Bridgette", 4, "maxwell24"),
];

//database for tweets that mention a user
var mention = [
  new Connection("Hi Dan @slastic", 1, "bmentz"),
  new Connection("Hi Dante @dante", 2, "slastic"),
  new Connection("Hi Max @maxwell24", 3, "dante"),
  new Connection("Hi Bridgette @bmentz", 4, "maxwell24")
];

//database for tweets that have a hashtag
var hashtag = [
  new Hashtag("No more class #summer", "dante", "summer"),
  new Hashtag("Time for the beach #summer", "maxwell24", "summer"),
];


//returns the connect tweets to display
exports.displayConnection = function(id){
  var result = [];
  if(!connect){
  	result.push(" ");
  	result.push('What is happening now, tailored for you');
  }
  else{
  	for(var x = connect.length-1; x >= 0; x--) {
		if(connect[x].uid === id){
			result.push(connect[x].username + " @" + connect[x].username);
			result.push(connect[x].message);
		}
	}
  }
  return result;
};

//adds a new connection to the conect database
exports.addConnection = function(message, id, username){
	connect.push(new Connection(message, id, username));
};

//returns the tweets that mention the user with uid id
exports.displayMention = function(id){
  var result = [];
  if(!mention){
  	result.push(" ");
  	result.push("Tweets that mention you, or are in reply to you, appear here");
  }
  else{
  	for(var x = mention.length-1; x >= 0; x--) {
		if(mention[x].uid === id){
			result.push(mention[x].username + " @" + mention[x].username);
			result.push(mention[x].message);
		}
	}
  }
  return result;
};

//adds a new mention to the mention database
exports.addMention = function(message, id, username){
	mention.push(new Connection(message, id, username));
};

//returns the hashtag tweets to display
exports.displayHashtag = function(){
  var result = [];
  if(!hashtag){
    result.push("");
    result.push('What is happening now, tailored for you');
  }
  else{
    for(var x = hashtag.length-1; x >= 0; x--) {
        result.push(hashtag[x].tag);
        result.push(hashtag[x].username + " @" + hashtag[x].username);
        result.push(hashtag[x].message);
    }
  }
  return result;
};

//adds a new connection to the conect database
exports.addHashtag = function(message, username, tag){
  hashtag.push(new Hashtag(message, username, tag));
};

//adds a new mention to the mention database
exports.addMention = function(message, id, username){
	mention.push(new Connection(message, id, username));
};

//returns the hashtag tweets to display
exports.displayHashtag = function(){
  var result = [];
  if(!hashtag){
    result.push(" ");
    result.push('Search for topics your interested in');
  }
  else{
    for(var i = hashtag.length-1; i >= 0; i--) {
      for(var x = hashtag.length-1; x >= 0; x--) {
        if(hashtag[x].tag === hashtag[i].tag){
          result.push(hashtag[x].tag);
           result.push(hashtag[x].username + " @" + hashtag[x].username);
            result.push(hashtag[x].message);
        }
      }
  }
  return result;
};

//adds a new connection to the conect database
exports.addHashtag = function(message, username, tag){
  hashtag.push(new hashtag(message, username, tag));
};

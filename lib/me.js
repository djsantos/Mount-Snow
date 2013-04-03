/** @module me */
/*
 * @export list of tweets
 */
module.exports = {
	tweets:tweets
};

//tweet object
function tweet(message){
	if(message.length < 140){
		this.message = message;
	}
	//should probable change how we handle too long of messages, just added this for now
	else{
		message = 'tweet exceeds 140 characters'
	}
	return message;
}

//tweet object
function tweets(){
return tweets;
}


//database of tweets
var tweets = [
	tweet('tweet 1'),
	tweet('tweet 2')	
];
	
	
//adds tweet to the tweets database
function createTweet(message){
	tweets.add(new tweet(message));	
}

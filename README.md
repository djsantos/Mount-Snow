#CS326 :Mount-Snow

## How to Run
This application can be run using 'node app.js'

##Project Assignment 04
#Overview:
-corrected functionality implemented incorrectly durring previous assignment
-implementing AJAX to update tweetfeed
-implementing sockets to update following/followers

#app.js
-added functionality to make use of sockets
-added needed http routes
-added get and post methods to make ajax function with the tweets

#javascripts:
-added the jquery library
-created ajax.js file
	-Created a chat client to keep track of posts received from server
	-Poll function to check server for new posts
	-Post function to post text to server and check function to check for more messages
	-jquery ready handler


#Libraries:
-Tweet: modified code to work with ajax
-user: correctly creates new user object upon signup

#Routes:
-Signup: made it so that the signup was working properly and did not have the errors found by 
-home: now correctly displays tweets of those that the user is following in addition to the users own tweets.
-compose modified code to work with ajax


#Views:
-home: added script tags for jquery and ajax, modified how tweets were displayed
-compose: added script tags for jquery and ajax
-me: added script tags for jquery and ajax, modified how tweets were displayed

-compose:added script tags for jquery and sockets.io
-following:added script tags for jquery and sockets.io
-followers:added script tags for jquery and sockets.io

## Project Assignment 05
Here is a list of the files and the additions we made:

#library files:

-updated tweets.js:

	-Tweets database modified to store id and username of who sent and who recieved the tweet
	(sender and reciever are the same if tweet wasn't at some (@username))
	
	-createTweet function modified to handle tagging multiple people in a tweet
	-displayTweets and displayMytweets functions modified to display tweets of reciever



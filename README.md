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

####NOTE####
Due to problems with implementing the database, most website functionality was lost. As the assignment was to
implement the database, that is what is in the master branch. A branch named noDatabase is available to show functionality.
This other branch is important because it shows all the work we have been doing. You can log on under a premade account to see initial data
and create a new user and populate the "database" arrays. Capabilities include favoriting, following, composing tweets, sending direct messages, etc.
############

Here is a list of the files and the additions we made:

#app.js
-added more socket.io to handle activity feed and following
-added more socket.io to handle activity feed and favoriting

#library files:

-updated tweets.js:

	-Tweets database modified to store id and username of who sent and who recieved the tweet
	(sender and reciever are the same if tweet wasn't at some (@username))
	
	-createTweet function modified to handle tagging multiple people in a tweet
	-displayTweets and displayMytweets functions modified to display tweets of reciever

-updates connect.js:

	-has a database of tweets that mention a user
	
	-added the function displayMentions to display the tweets that mention a given user
	
	-added the function addMentions to add a tweets to the mention database
	
	-added the function displayConnections to display the tweets that interact with a given user
	
	-added the function addConnection to add a tweets to the connect database
	
-added favorites.js 
	-has a database of favortited tweets
	-has all functions needed to work (create favorite, store, access, etc.)
	-included activity library
	-added line to add new activity when a new follow occurs
	
-added activity.js 
	-has a database of activity events (follows or favorites)
	-has all functions needed to work dealing with both types of activities
	
-updates follow.js
	-included activity library
	-added line to add new activity when a new follow occurs
	
#Routes:

-updated mentions.js to send the list of tweets that mention a given user to the view mention.ejs

-updated connect.js to send the list of tweets that interact with a given user to the view connect.ejs

-updated compose.js to handle interact/mention errors

-updated followers.js to fix a problem with followers not showing up correctly

-all routes (except welcome/signup) recieved uid checks to make sure a user is logged in. If they are not, they are redirected to welcome.

-activity.js got feed functionality

-favorites.js got feed functionality

	

#Views:

-updated mention.ejs to display tweets that mention the given user

-updated connect.ejs to display interactions of the given user

-updated activity.ejs to add socket.io (updates a users activity feed while they are looking at it for both follows and favorites)

-updated followers.ejs to add socket.io (updates a users follower list while they are looking at it)

-updated findFriends.ejs to add socket.io (only calls server)

-all added css line to link stylesheet as well as new divs and names for use with css


# databases:
-created user database

-converted all methods that had previously used the user stub database to now use the true databse

-attempted creating other database tables for the other stub databases that had originally been in the application, these were unable to be compelted due to a series of difficulties encountered within implementation

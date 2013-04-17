#CS326 :Mount-Snow

## How to Run
This application can be run using 'node app.js'

## Project Assignment 03
Here is a list of the files and the additions we made:

#library files:

-User.js created file with basic authentication and user object database. currently has 4 registered users

	lookup function is used to verify the correct username and password for each user

	createUser function is used to create a new user

-tweet.js created file to store tweets. currently has 4 tweets

	displayTweets function returns an array of the tweets a given users following has tweeted

	displayMyTweets function returns an array of the tweets the given user has tweeted

	createTweet function addes a tweet to the tweet database

	tweetCount function returns the number of tweets a given user has tweeted

-welcome.js has been deleted

-signUp.js has been deleted

-home.js has been deleted

-me.js has been deleted

-help.js has been deleted

-home.js username methods were removed as they are not handled through here

-follow.js created, peopleYouFollowCount, followersCount and addPersonYouFollow functions created

	follower relational database created



#routes:

-welcome.js requires lib/user

  edited login function so it calls the lookup function in lib/user to verify the correct username and password

-signUp.js requires lib/user

  edited the CreateAccount function so it calls the createUser function in lib/user to create a new user

-compose.js created as new file with functions to render the page and to create a new Tweet
	AJAX implementation for tweet feed
	-exports.post function – store incoming posts in posts array
	-exports.check function – checks how many new posts are available


-home.js-added variables to keep track of information to the individual user, these are set upon rendering the page

-favorites.js, followers.js, following.js, lists.js, profile.js, and settings.js were added

-all routes gained lines to implement displaying the current user

	each recieved a variable declaration which is passed to the views and a line defining the variable using req.session.user

-findFriends.js requires lib/follow

	added in array of unfollowed users to be displayed for the user to view
  
  
#views:

-compose.ejs 

	this is a wire frame for creating a tweet

	returns home on success and otherwise displays the problem

-home.ejs now displays tweets properly

me.ejs now displays the tweets made by the user

-favorites.ejs, followers.ejs, following.ejs, lists.ejs, profile.ejs, and settings.ejs were added

-all veiws:

	gained a line to display the currently logged in username and the main navigation was changed to be the same on every page
	all pages were also given functional link to the new "compose a tweet" page
	all pages were also given signout links which clears session and returns to welcome page

-help.ejs was filled out

-me.ejs now displays the current users tweets

-findFriends.ejs now displays users that the current user is not following and allows for them to choose to follow them-buttons are currently non functional, 

-following.ejs now properly displays the users that the current user is following

-followers.ejs now properly displays the users being followed by the current user


##Project Assignment 04
#Overview:
-corrected functionality implemented incorrectly durring previous assignment
-implementing AJAX to update tweetfeed
-implementing sockets to update following/followers

#app.js
-added functionality to make use of sockets
-added needed http routes

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



============

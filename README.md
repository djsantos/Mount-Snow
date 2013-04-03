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
	displayTweets function returns an array of the tweets the given user has tweeted
	createTweet function addes a tweet to the tweet database
	tweetCount function returns the number of tweets a given user has tweeted
-welcome.js has been deleted
-signUp.js has been deleted
-home.js username methods were removed as they are not handled through here
-follower.js created, followerCount() and addFollower() methods created.
	-takes in an id of the person who has decided to follow you, adds to your follower database
-personyoufollow.js created, peopleyoufollowcount() method created.
	-takes in id of person you want to follow, adds them to people you follow database.
-Still need to intertwine these two classes so that when a person decides to follow another user, it automatically
adds them to this users follower database.


#routes:

-welcome.js requires lib/user
  edited login function so it calls the lookup function in lib/user to verify the correct username and password
-signUp.js requires lib/user
  edited the CreateAccount function so it calls the createUser function in lib/user to create a new user
-compose.js created as new file with functions to render the page and to create a new post
-favorites.js, followers.js, following.js, lists.js, profile.js, and settings.js were added
-all routes gained lines to implement displaying the current user
	each recieved a variable declaration which is passed to the views and a line defining the variable using req.session.user
  
  
#views:

-compose.ejs this is a wire frame for creating a tweet
-favorites.ejs, followers.ejs, following.ejs, lists.ejs, profile.ejs, and settings.ejs were added
-all veiws gained a line to display the currently logged in username and the main navigation was changed to be the same on every page. all pages were also given functional link to the new "compose a tweet" page
============

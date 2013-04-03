#CS326 :Mount-Snow

## How to Run
This application can be run using 'node app.js'

## Project Assignment 03
Here is a list of the files and the additions we made:

#library files:

-User.js created file with basic authentication and user object database. currently has 4 registered users
  lookup function is used to verify the correct username and password for each user
  createUser function is used to create a new user
-welcome.js has been deleted
-signUp.js has been deleted

#routes:

-welcome.js requires lib/user
  edited login function so it calls the lookup function in lib/user to verify the correct username and password
-signUp.js requires lib/user
  edited the CreateAccount function so it calls the createUser function in lib/user to create a new user
  -compose.js created as new file with functions to render the page and to create a new post
  
  
#views:

-compose.ejs this is a wire frame for creating a tweet
============

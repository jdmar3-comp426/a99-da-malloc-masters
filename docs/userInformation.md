# General

When first running our application, users will be immediately prompted to sign in or to create an account. Once an account is created, or a user is logged in, the user will be redirected to the game.

## Sign Up

If a user has not created an account before, they may do so by clicking `or create an account` on the initial screen. The front end sign up system is connected to the back end login database through `signup.js`. The `sendRequest.open("POST", "http://localhost:5000/app/new/user" );` line of code and the subsequent `sendRequest.send( signupInfo );` push the new user info to the login database.

## Sign in

If a user has  created an account before, they can immediately enter their username and password to sign in. The front end sign in system is connected to the back end login database through `login.js`. The `sendRequest.open( "GET", "http://localhost:5000/app/login/" + username + "/" + pass );` line of code finds the username and password entered into onto the login form within the login database, if it exists. If it does not exist, the user will be prompted to try again. If it does exist, the webpage will immediately redirect to the game following a success prompt that shows the user's id. 

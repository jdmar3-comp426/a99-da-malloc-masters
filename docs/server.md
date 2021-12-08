# Server Endpoints

1. The root endpoint is located at /app/ and gives a message that says 'OK' with a status code of 200.

2. /app/users/ lists all the user data of every registered account with a status code of 200.

3. /app/new/user adds a new user's username and password at the next available id in the user database. This gives a status code of 201.

4. /app/new/ adds new user info to the userinfo database and sets default values for the stats database. This gives a status code of 201.

5. /app/user/:id gives out the login info of a given user id. If the id exists, the status code will be 200. It will be 404 otherwise.

6. /app/login/:user/:pass searches for an entry in the userinfo database with a username and password and has a status code of 200 if the entry exists. A 404 status is given otherwise.

7. /app/stats/:id lists off all the stats associated with a given user id. Gives a status code of 200.

8. /app/update/user/:id updates the login info in the userinfo database with a given user id. Status code is 200.

9. /app/update/stats/:id updates the stats that are stored in the stats database using a given user id. Status code is 200.

10. /app/delete/user/:id deletes the entries in the userinfo and stats databases that are associated with the given user id. Gives a status code of 200.

11. The default endpoint for any other request gives an error message and a status code of 404.
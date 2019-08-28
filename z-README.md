```js
AUTHENTICATION ENDPOINTS
(Onboarding process for a new user)


1. REGISTER
```
        https://dadjokes-be.herokuapp.com/api/auth/register

```js
INPUT - takes a username and password
{
        "username": "JQ Adams",
	"password": "password"
}

EXPECTED RESPONSE - 
        1. Generates hashed password
        2. Creates user - by username
        3. Creates user id
        4. Gives an error if user already exists
{
        "id": 4,
        "username": "JQ Adams",
        "password": "$2a$14$FQmRiIag8UKgzbm31akRmeYScEqktz.UJgO4RqkpLw4qzOyq0eX56"
}


2. LOGIN
```
            https://dadjokes-be.herokuapp.com/api/auth/login
   
   ```js
   INPUT - takes a username and password

{
	"username": "JQ Adams",
	"password": "password"
}


   EXPECTED RESPONSE - 
        1. Creates welcome message
        2. generates jsonwebtoken
        3. jsonwebtoken expires in 8 hours after which the user will have to re-login

   {
  "message": "Welcome, JQ Adams",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6IkpRIEFkYW1zIiwiaWF0IjoxNTY2ODU5MTA5LCJleHAiOjE1NjY4ODc5MDl9.68xHxC97CDuhqNg3oU6AX6Qwj3G6HA6fqlJe0mMMJJI"
}


ENDPOINT for jokes
```
https://dadjokes-be.herokuapp.com/api/jokes
```js


GET             ALL JOKES-Ability for an unregistered user to view dad jokes listed as 'public'.
                    -Ability to search jokes by key words both on the public feed and within a users account can be done with an array method after it is converted to an array from this string.

                        {
                                "id": 13254,
                                "setup": "What do you call a boomerang that doesn't come back?",
                                "punchline": "A stick",
                                "public": false,                 <<<<<< Defaults to false
                                "private": false,                <<<<<< Defaults to false
                                "upvote": false,                <<<<<< Defaults to false
                                "downvote": false            <<<<<< Defaults to false
                        }


POST            Ability to add a new joke, including listing as public or private. 
                      Hitting save adds to the public feed, the joke wallet, or both. 

                          INPUT - only "setup" and "punchline" are required fields

                        {
                                "id": 13254,
                                "setup": "What do you call a boomerang that doesn't come back?",
                                "punchline": "A stick",
                                "public": false,                 <<<<<< Defaults to false
                                "private": false,                <<<<<< Defaults to false
                                "upvote": false,                <<<<<< Defaults to false
                                "downvote": false            <<<<<< Defaults to false
                        }

PUT               Ability to edit jokes by ID


                          INPUT

                        {
                                "id": 13254,
                                "setup": "What do you call a boomerang that doesn't come back?",
                                "punchline": "A stick",
                                "public": false,                 <<<<<< Defaults to false
                                "private": false,                <<<<<< Defaults to false
                                "upvote": false,                <<<<<< Defaults to false
                                "downvote": false            <<<<<< Defaults to false
                        }


DELETE         To delete jokes by ID

                        INPUT
                        {
                                "id": 13254,
                        }









    
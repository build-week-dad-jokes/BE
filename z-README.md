```js
1.0 AUTHENTICATION ENDPOINTS
(Onboarding process for a new user)


        1.1      REGISTER

                1.1.1     ENDPOINT
```
                                https://dadjokes-be.herokuapp.com/api/auth/register
```js
                1.1.2     INPUT - takes a username and password

                        {
                                 "username": "JQ Adams",
	                        "password": "password"
                        }

                1.1.3     EXPECTED RESPONSE - 
                                1. Generates hashed password
                                2. Creates user - by username
                                3. Creates user id
                                4. Gives an error if user already exists

                        {
                                "id": 4,
                                "username": "JQ Adams",
                                "password": "$2a$14$FQmRiIag8UKgzbm31akRmeYScEqktz.UJgO4RqkpLw4qzOyq0eX56"
                        }


        1.2      LOGIN

                1.2.1     ENDPOINT
```
                                https://dadjokes-be.herokuapp.com/api/auth/login
```js
                1.2.2     INPUT - takes a username and password

                        {
	                        "username": "JQ Adams",
	                        "password": "password"
                        }


                1.2.3     EXPECTED RESPONSE - 
                                1. Creates welcome message
                                2. generates jsonwebtoken
                                3. jsonwebtoken expires in 8 hours after which the user will have to re-login

                        {
                                "message": "Welcome, JQ Adams",
                                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6IkpRIEFkYW1zIiwiaWF0IjoxNTY2ODU5MTA5LCJleHAiOjE1NjY4ODc5MDl9.68xHxC97CDuhqNg3oU6AX6Qwj3G6HA6fqlJe0mMMJJI"
                        }


2 JOKES ENPOINTS

        2.1 BASE ENPOINT
```
                                https://dadjokes-be.herokuapp.com/api/jokes
```js


        2.1 GET ALL JOKES
```    
                                https://dadjokes-be.herokuapp.com/api/jokes/
```js                             
                           
                                -Ability for an unregistered user to view dad jokes listed as  'public'.
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

        2.2     GET JOKES BY ID
```
                                https://dadjokes-be.herokuapp.com/api/jokes/byid/:id
```js

        2.3     GET ALL USERS
```
                                https://dadjokes-be.herokuapp.com/api/jokes/users
```js

        2.4     GET USERS BY ID
```
                                https://dadjokes-be.herokuapp.com/api/jokes/userid/:id
```js

        2.5     POST JOKE
```
                                https://dadjokes-be.herokuapp.com/api/jokes/addjoke
```js

                2.4.1   AVAILABLE FIELDS - only "setup" and "punchline" are required fields
                                        {
		                                "id": INT,
                                                "setup": STRING,
                                                "punchline": STRING,
                                                "public": BOOLEAN,              <<<<<< Defaults to false
                                                "private": BOOLEAN,             <<<<<< Defaults to false
                                                "upvote": BOOLEAN,             <<<<<< Defaults to false
                                                "downvote": BOOLEAN,         <<<<<< Defaults to false
                                                "user_id": INT
                                        }

        2.6     PUT (UPDATE) JOKES BY ID
```
                                https://dadjokes-be.herokuapp.com/api/jokes/updatebyid/:id
```js

                2.5.1   AVAILABLE FIELDS - only "setup" and "punchline" are required fields
                                        {
		                                "id": INT,
                                                "setup": STRING,
                                                "punchline": STRING,
                                                "public": BOOLEAN,              <<<<<< Defaults to false
                                                "private": BOOLEAN,             <<<<<< Defaults to false
                                                "upvote": BOOLEAN,             <<<<<< Defaults to false
                                                "downvote": BOOLEAN,         <<<<<< Defaults to false
                                                "user_id": INT
                                        }
        


        2.7     DELETE JOKES BY ID
```
                                https://dadjokes-be.herokuapp.com/api/jokes/delete/:id

```js

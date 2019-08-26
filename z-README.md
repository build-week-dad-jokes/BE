AUTHENTICATION ENDPOINTS
(Onboarding process for a new user)

    REGISTER:

            http://localhost:3300/api/auth/register
            takes a username and password
            generates jsonwebtoken

    LOGIN:

            http://localhost:3300/api/auth/login
            takes a username and password
            generates jsonwebtoken
            LOGIN expires in 8 hours



            http://localhost:3300/
            accesses homepage


-Ability for an unregistered user to view dad jokes listed as 'public'.

        GET all jokes

-Ability to add a new joke, including listing as public or private. 
Hitting save adds to the public feed, the joke wallet, or both. 

        POST (setup, punchline, public t/f, private t/f)

        upvote
        downvote

Ability to edit or 

        PUT (setup, punchline, public t/f, private t/f)

delete jokes.

        DELETE BY ID

-Ability to search jokes by key words both on the public feed and within a user's account.


Looks good. I'm working on getting the db and some backend endpoints ready...Looks like all we need is a register, login, setup, punchline, public joke, & private joke fields...does this look about right?

Tables
    users
        ID
        username
        password
        jokesId
    jokes
        ID
        setup
        punchline
        public t/f
        private t/f
        upvote t/f
        downvote t/f



    
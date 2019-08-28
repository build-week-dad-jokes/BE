const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const secrets = require("../config/secrets.js");
//const Users = require("../queries/jokes-queries.js");

const Users = require("../queries/auth-queries.js");


// REGISTER
router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 14); // hash the password
    user.password = hash; // reset password as hashed password

    Users.addUser(user)
      .then(newUser => {
        // console.log(newUser)
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to add user."
        });
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});






// LOGIN
  router.post("/login", (req, res) => {
    if (req.body.username && req.body.password) {
      let { username, password } = req.body;
      Users.findBy({ username })
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = createToken(user);
            res.status(200).json({ message: `Welcome, ${user.username}`, token });
          } else {
            res.status(401).json({ message: "Invalid Credentials." });
          }
        });
    } else {
      res.status(500).json({ message: "Please enter a username and password." });
    }
});








// GET ALL JOKES
router.get('/', async (req, res) => {

Users.find()
  

  try {
      // we are passing req.query to the .find() method of hubs-model
      const jokes = await Jokes.find(req.query);
      res.status(200).json(jokes);
  } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
      message: 'Error retrieving the jokes',
      });
  }
});










// CREATE TOKEN FUNCTION
function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;

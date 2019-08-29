const express = require('express');

const Jokes = require('../queries/jokes-queries.js');

const router = express.Router();


// GET ALL JOKES
router.get('/', (req, res) => {
    Jokes.findJokes()
      .then(jokes => {
        res.status(200).json(jokes);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get jokes' });
      });
  });

// GET JOKE BY ID
router.get('/byid/:id', async (req, res) => {
  try {
  const joke = await Jokes.findJokeById(req.params.id);
  if (joke) {
  res.status(200).json(joke);
  } else {
  res.status(404).json({ message: 'Joke not found' });
  }
  } catch (error) {
  // log error to database
  console.log(error);
  res.status(500).json({
  message: 'Error retrieving the joke',
  });
  }
  });

// GET ALL USERS
  router.get('/users', (req, res) => {
    Jokes.findAllUsers()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get users' });
      });
  });

// GET USER BY ID
router.get('/userid/:id', async (req, res) => {
  try {
  const user = await Jokes.findUser(req.params.id);
  if (user) {
  res.status(200).json(user);
  } else {
  res.status(404).json({ message: 'User not found' });
  }
  } catch (error) {
  // log error to database
  console.log(error);
  res.status(500).json({
  message: 'Error retrieving the user',
  });
  }
  });

// POST JOKE
router.post("/addjoke", (req, res) => { 
    const joke = (req.body);
    Jokes.addJoke(joke)
        .then(newJoke => {
          res.status(201).json(newJoke);
        })
        .catch(err => {
          res.status(500).json({
            message: "There was an error while trying to add joke and punchline."
          });
        }
    );
}); 

// UPDATE JOKE BY ID
router.put('/updatebyid/:id', async (req, res) => {
  try {
    const joke = await Jokes.update(req.params.id, req.body);
  if (joke) {
    res.status(200).json(joke);
  } else {
    res.status(404).json({ message: 'The joke could not be found' });
  }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
   message: 'Error updating the joke, man',
    });
  }
});

// DELETE JOKE BY ID
router.delete('/delete/:id', async (req, res) => {
  try {
  const count = await Jokes.remove(req.params.id);
  if (count > 0) {
  res.status(200).json({ message: 'The joke has been deleted' });
  } else {
  res.status(404).json({ message: 'The joke was not deleted because it could not be found' });
  }
  } catch (error) {
  // log error to database
  console.log(error);
  res.status(500).json({
  message: 'There was an error removing the joke',
  });
  }
  });


module.exports = router;
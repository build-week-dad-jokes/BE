const express = require('express');

// const authenticate = require('../auth/authenticate-middleware.js');

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





// UPDATE JOKE
  
router.put('/:id', async (req, res) => {
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

  ////////////////////////////////////////////

//  router.put('/:id', async (req, res) => {
  //   const { id } = req.params;
  //   const changes = req.body;
  
  //   try {
  //     const count = await db('jokes')
  //       .where({ id })
  //       .update(changes);
  
  //     if (count) {
  //       res.json({ update: count });
  //     } else {
  //       res.status(404).json({ message: 'Could not find joke with given id' });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ message: 'Failed to update joke' });
  //   }
  // });







// DELETE JOKE
  
//   router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const count = await db('users')
//         .where({ id })
//         .del();
  
//       if (count) {
//         res.json({ removed: count });
//       } else {
//         res.status(404).json({ message: 'Could not find user with given id' });
//       }
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to delete user' });
//     }
//   });













module.exports = router;
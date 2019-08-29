//

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
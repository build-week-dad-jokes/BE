
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        { id: 1, setup:'Set Up 1 ', punchline: 'Punch Line 1', public: false, private: false, upvote: false, downvote:false, user_id: 1},
        { id: 2, setup:'Set Up 2 ', punchline: 'Punch Line 2', public: false, private: false, upvote: false, downvote:false, user_id: 2},
        { id:3, setup:'Set Up 3 ', punchline: 'Punch Line 3', public: false, private: false, upvote: false, downvote:false, user_id: 1},
        { id: 4, setup:'Set Up 4 ', punchline: 'Punch Line 4', public: false, private: false, upvote: false, downvote:false, user_id: 2},
        { id:5, setup:'Set Up 5 ', punchline: 'Punch Line 5', public: false, private: false, upvote: false, downvote:false, user_id: 3}
      ]);
    });
};
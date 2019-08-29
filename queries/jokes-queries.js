const db = require("../database/dbConfig.js");

module.exports = {
  findJokes,
  findAllUsers,
  find,
  addUser,
  addJoke,
  findUser,
  findBy,
  update,
  remove,
  findById
};

function findJokes(){
  return db('jokesdb')
    .select()
    .table('jokes');
}

function findAllUsers(){
  return db('jokesdb')
    .select('id', 'username')
    .table('users')
    .orderBy("id");
}

function find() {
    const results = db('jokesdb')
    
    return results;
    }

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return findUser(id);
}

function findUser(id) {
  return db("users")
    .where({ id })
    .select("id", "username", "password")
    .orderBy("id")
    .first();
}

async function addJoke(joke) {
  const[id] = await db('jokes').insert(joke);
  return findJoke(id);
}

function findJoke(id) {
  return db("jokes")
  .where({ id })
  .select(
    "id", 
    "setup", 
    "punchline",
    "public",
    "private",
    "upvote",
    "downvote",
    "user_id")
  .orderBy("id")
  .first();
}


function findBy(filter) {
  return db("users").where(filter);
}


function update(id, changes) {
  return db('jokes')
  .where({ id })
  .update(changes, '*');
  }

  function remove(id) {
    return db('jokes')
    .where({ id })
    .del();
    }

    function findById(id) {
      return db('jokes')
      .where({ id })
      .first();
      }
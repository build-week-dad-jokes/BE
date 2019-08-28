const db = require("../database/dbConfig.js");

module.exports = {
  findJokes,
  find,
  addUser,
  findUser,
  findBy
};

function findJokes(){
  return db('jokesdb')
    .select()
    .table('jokes');
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

function findBy(filter) {
  return db("users").where(filter);
}
exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();

        tbl
          .string('username', 128)
          .notNullable()
          .unique();
        tbl
          .string('password', 255)
          .notNullable();
      })
      .createTable('jokes', tbl => {
        tbl.increments();
        
        tbl
          .string("setup", 500)
          .notNullable();
        tbl
          .string("punchline", 500)
         .notNullable();
       tbl
          .boolean("public")
          .notNullable()
          .defaultTo(false);
      tbl
          .boolean("private")
          .notNullable()
          .defaultTo(false);
      tbl
          .boolean("upvote")
          .defaultTo(false);
     tbl
          .boolean("downvote")
          .defaultTo(false);
        tbl
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('jokes')
      .dropTableIfExists('users');
  };
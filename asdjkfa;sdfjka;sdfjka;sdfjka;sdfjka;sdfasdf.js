exports.up = function(knex) {
    return knex.schema
        .createTable("jokes", tbl => {
            tbl
                .increments();
            
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
            })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('jokes')
};

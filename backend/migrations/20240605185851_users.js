/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable('users', function(table) {
            table.increments('id').primary()
            table.string('name', 255).notNullable().unique()
            table.string('password', 50).notNullable()
            table.string('email', 200).notNullable().unique()
            table.boolean('adm').notNullable().defaultTo(false)
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};

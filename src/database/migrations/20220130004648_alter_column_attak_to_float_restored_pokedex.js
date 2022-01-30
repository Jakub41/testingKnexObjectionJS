/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('restored_pokedex', (t) => {
    t.float('attack').alter();
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('restored_pokedex', (t) => {
    t.integer('attack').alter();
  });
}

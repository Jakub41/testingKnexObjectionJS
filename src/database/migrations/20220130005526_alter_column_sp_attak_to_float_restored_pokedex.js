/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable('restored_pokedex', (t) => {
    t.float('sp_atk').alter();
    t.float('sp_def').alter();
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('restored_pokedex', (t) => {
    t.integer('sp_atk').alter();
    t.integer('sp_def').alter();
  });
}

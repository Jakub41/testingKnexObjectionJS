/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Delete all
  await knex.raw('TRUNCATE TABLE "test_table" CASCADE');
  // Seed with data
  await knex('test_table').insert([
    { id: 1, text: 'hello', number: 1 },
    { id: 2, text: 'Bye', number: 2 },
    { id: 3, text: 'Any', number: 3 },
  ]);
}

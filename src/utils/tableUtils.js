function tableDefaultColumns(table) {
  table.text('name').notNullable().unique();
  table.text('type_1').notNullable();
  table.text('type_2');
  table.integer('total').notNullable();
  table.integer('hp').notNullable();
  table.integer('attack').notNullable();
  table.integer('defense').notNullable();
  table.integer('sp_atk').notNullable();
  table.integer('sp_def').notNullable();
  table.integer('speed').notNullable();
  table.integer('generation').notNullable();
  table.boolean('legendary').defaultTo(false);
}

function createTableName(knex, tableName) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().notNullable().primary();
    tableDefaultColumns(table);
  });
}

export { tableDefaultColumns, createTableName };

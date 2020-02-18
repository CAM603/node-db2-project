
exports.up = function(knex) {
    return knex.schema.table('cars', table => {
        table.decimal('year')
    })
};

exports.down = function(knex) {
    return knex.schema.table('cars', table => {
        table.dropColumn('year')
    })
};

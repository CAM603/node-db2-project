
exports.up = function(knex) {

    return knex.schema.createTable('cars', table => {
        table.increments();

        table.string('make', 128)
            .notNullable()
            .index();

        table.string('model', 128)
            .notNullable();

        table.decimal('miles')
            .notNullable();

        table.decimal('vin')
            .notNullable();

        table.string('transmission', 200);

        table.string('title', 128);
    });
};

exports.down = function(knex) {
    
    return knex.schema.dropTableIfExists('cars')
};

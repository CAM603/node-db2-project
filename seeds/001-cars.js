
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Mazda', model: 'Miata', miles: 98000, vin: 213451413423, transmission: 'manual', title: 'clean', year: 1995},
        {make: 'Ford', model: 'Mustang', miles: 20000, vin: 29897438343, transmission: 'automatic', title: 'salvaged', year: 2019},
        {make: 'Toyota', model: 'Supra', miles: 105000, vin: 21336444536, transmission: 'manual', title: 'clean', year: 1998},
        {make: 'Porsche', model: '911', miles: 110000, vin: 213434545223, transmission: 'manual', title: 'clean', year: 1975},
        {make: 'Nissan', model: '240sx', miles: 88000, vin: 21334532423, transmission: 'manual', title: 'clean', year: 1990},
        {make: 'BMW', model: 'M3', miles: 35000, vin: 213464566423, transmission: 'manual', title: 'clean', year: 2019},
        {make: 'Volkswagen', model: 'GTI', miles: 115000, vin: 213355423, transmission: 'manual', title: 'clean', year: 2009},
        {make: 'Mitsubishi', model: 'Eclipse', miles: 123000, vin: 2133432323, transmission: 'manual', title: 'clean', year: 1990}
        
      ]);
    });
};

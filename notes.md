## Install Dependencies
- npm i
- npm install knex sqlite3
- npm install express
- npm install -g knex
- knex init

## Add folders
- Add data folder
- Make changes to knefile.js:
//////////// BEFORE /////////////////////
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },
}
////////////// AFTER ///////////////////
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3'
    },
    useNullAsDefault: true,
  },
}
/////////////////////////////////
- Add api folder
- Add index.js in root of directory
- Add server.js inside api folder

## In index.js add: 
const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Lisitening on port ${PORT}...`)
})

## In server.js add:
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Hello from Node db2 Project</h1>')
});

module.exports = server;

- Add cars folder
- Add cars-router.js file inside cars folder

## In cars-router add:
const express = require('express');

const router = express.Router();

//////// Requests will go here ////////////

module.exports = router;

## In server.js add:
const carsRouter = require('../cars/cars-router');
server.use('/api/cars', carsRouter);

- Add dbConfig.js in data folder

## In dbConfig.js add:
const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);

## In cars-router.js add:
const db = require('../data/dbConfig');

## Create a migration
- knex migrate:make create_cars_table

## In new migration file
- Create table
- Add migration functions: knex migrate:latest

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
- Add index.js
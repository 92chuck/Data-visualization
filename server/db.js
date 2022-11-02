const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'junbeomchun',
  password: 'test',
  host: 'localhost',
  port: 5432,
  database: 'project',
});

module.exports = pool;

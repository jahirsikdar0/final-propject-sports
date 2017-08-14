
const pgp = require('pg-promise')({}),
config = process.env.DATABASE_URL || 'postgres://sikdarislam@localhost:5432/sports_db',
db = pgp(config);

module.exports = db;
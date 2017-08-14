const db = require('../db/config');

const Sport = {
	findAll: () => db.manyOrNone('SELECT * FROM sports'),

	// findBySport: (name) => db.any('SELECT * FROM sports WHERE name LIKE $1', [name]),
	findBySport: (name) => db.any('SELECT * FROM sports WHERE name = $1', [name]),

	findById: (id) => db.one(`SELECT * FROM sport WHERE id = $1`, [id]),

	create: (name, state, img) => {
		return db.one(
			`INSERT INTO sports (name, state, img) VALUES ($1, $2, $3) returning id`,
			[name, state, img]
			);
	},

	delete: (id) => db.none('DELETE FROM sports WHERE id = $1', [id])
};

module.exports = Sport;
const router = require('express').Router(),
 Sport = require('../models/sport');

router.post('/search', (req, res) => {
	console.log('inside API/search', req.body.search);
	Sport.findBySport(req.body.search)
		.then((dataBySport) => {
			res.json(dataBySport);
		})
		.catch( err => {
			console.log('controller/search get error', err);
		})
})

router.post('/', (req, res) => {
	console.log("POSTING THIS!:", req.body);
	const {name, state, image} = req.body

	Sport.create(name, state, img)
	.then((data) => {
        res.json(data);
	})
	.catch(err => console.log('CONTROLLER POST ERROR: ', err));
});

router.get('/', (req, res) => {
	Sport.findAll()
	.then((data) => {
		res.json(data);
	})
	.catch(err => console.log('CONTROLLER GET ERROR', err));

});



router.delete('/:id', (req, res) => {
	const id = req.params.id;
	console.log(id);
	Sport.delete(id)
	    .then((data) => {
	    	res.send('Dleted from DB');

	    })
	    .catch(err => console.log('CONTROLLER DELETE ERROR: ', err));

});

module.exports = router;
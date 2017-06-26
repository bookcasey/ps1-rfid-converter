const express = require('express');
const app = express();
const convert = require('./convert');

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	console.log(req.params.num);
	res.send('Visit /123456 to convert your number');
});

app.get('/:num', function (req, res) {
	console.log(req.params.num);
	res.json({
		number: convert(req.params.num)
	});
});

app.listen(port, function () {
	console.log(`App listening on port ${port}!`);
});

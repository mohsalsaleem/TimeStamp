var time_controller = require('.././controller/timestamp');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(process.cwd() + '/public/index.html');
	});

	app.get('/:query', function(req, res) {
		time_controller(req.params.query, res);
});

}
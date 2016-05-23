var express = require('express');
var app = express();
var router = require('./app/routes/router');

app.use('/public', express.static(process.cwd() + '/public'));

router(app);

app.listen(8080, function() {
	console.log('Node server listening on 8080');
})
var moment = require('moment');

module.exports = function(query, res) {
	var date = query;
	var natural = null,
		unix = null;

	if(+date >= 0) {
		unix = date;
		natural = toNatural(date);
	} else if(isNaN(+date) && moment(date, "MMMM DD, YYYY").isValid()) {
		natural = date;
		unix = toUnix(date);
	}

	var obj = Object();
	obj.unix = unix;
	obj.natural = natural;

	res.end(JSON.stringify(obj));

	function toNatural(param) {
		return moment.unix(param).format("MMMM DD, YYYY");
	}

	function toUnix(param) {
		return new Date(param).getTime() / 1000;
	}

}
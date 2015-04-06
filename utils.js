function calcAge(dateString) {
	var birthday = +new Date(dateString);
	return ~~((Date.now() - birthday) / (31557600000));
}
function monthDiff(d1) {
	d1 = new Date(d1);
	var d2 = new Date();
	var months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth() + 1;
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
}
function daysDiff(date1) {
	var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(date1);
	var secondDate = new Date();

	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
	return diffDays;
}
function isValidDate(dt) {
	if (Object.prototype.toString.call(d) === "[object Date]") {
		// it is a date
		if (isNaN(d.getTime())) {  // d.valueOf() could also work
			// date is not valid
		}
		else {
			// date is valid
		}
	}
	else {
		// not a date
	}
}

function isDate(sDate) {
	var scratch = new Date(sDate);
	if (scratch.toString() == "NaN" || scratch.toString() == "Invalid Date") {
		return false;
	} else {
		return true;

	}
}

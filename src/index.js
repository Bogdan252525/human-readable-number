module.exports = function toReadable (number) {
	const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundreds = 'hundred';

	if (number === 0) {
			return units[0];
	}

	let result = '';

	if (number >= 100) {
			const hundredPart = Math.floor(number / 100);
			result += units[hundredPart] + ' ' + hundreds;
			number %= 100;
			if (number > 0) {
					result += ' ';
			}
	}

	if (number >= 20) {
			const tenPart = Math.floor(number / 10);
			result += tens[tenPart];
			number %= 10;
			if (number > 0) {
					result += ' ';
			}
	}

	if (number >= 10 && number < 20) {
			result += teens[number - 10];
	} else if (number > 0 && number < 10) {
			result += units[number];
	}

	return result.trim();
}

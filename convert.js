const convert = (num) => {
	let binary = Number(num).toString(2);

  // Add leading 0s to make 24 bits
	if (binary.length < 24) {
		binary = new Array(24 - binary.length).fill(0).join('') + binary;
	}

  // Convert first 8 bits to decimal, convert rest to decimal, and then concatinate
	return `${parseInt(binary.slice(0,8), 2)}${parseInt(binary.slice(8), 2)}`;
};

module.exports = convert;

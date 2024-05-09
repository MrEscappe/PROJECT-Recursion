// Interation Resolution
function interactionFib(number) {
	let arr = [0, 1];
	if (number < 2) {
		return arr;
	}

	for (let i = 2; i < number; i++) {
		arr[i] = arr[i - 2] + arr[i - 1];
	}
	return arr;
}

// Recursion Resolution

function recursiveFib(number) {
	if (number === 1) return [0];
	if (number === 2) return [0, 1];

	const arr = recursiveFib(number - 1);
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return arr;
}

console.log(recursiveFib(8));

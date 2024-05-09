let array = Array.from({ length: 100 }, (_, i) => i + 1);
array = array.sort(() => Math.random() - 0.5);

function mergeSort(arr) {
	let result = [];
	if (arr.length < 2) return arr;

	const half = Math.floor(arr.length / 2);

	const leftSide = mergeSort(arr.slice(0, half));
	const rightSide = mergeSort(arr.slice(half, arr.length));

	while (leftSide.length > 0 && rightSide.length > 0) {
		result.push(leftSide[0] <= rightSide[0] ? leftSide.shift() : rightSide.shift());
	}

	return result.concat(leftSide, rightSide).flat();
}

console.log(mergeSort(array));

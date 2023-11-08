function calculateMaxHonor(arr, d) {
    let maxHonor = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let totalHonor = 0;
        let index = i;

        for (let j = 0; j < d; j++) {
            index = (index + (arr.length / d)) % arr.length;
            totalHonor += arr[index];
        }

        maxHonor = Math.max(maxHonor, totalHonor);
    }

    return maxHonor;
}

console.log(calculateMaxHonor([1, 2, 3, 4], 2));
console.log(calculateMaxHonor([1, 5, 6, 3, 4, 2], 3));
console.log(calculateMaxHonor([1, 1, 0], 1));


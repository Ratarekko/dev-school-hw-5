function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total +=arr[i]
    }
    return total;
}

function findIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = sum(arr.slice(0, i));
        const rightSum = sum(arr.slice(i + 1));

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findIndex([1, 100, 50, -51, 1, 1]));
console.log(findIndex([20, 10, -80, 10, 10, 15, 35]));

console.log(findIndex([4, 8, 15, 7, -10, 5, 6]));

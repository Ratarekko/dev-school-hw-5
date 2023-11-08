'use strict';

function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number);

    const highestNumber = Math.max(...numArray);
    const lowestNumber = Math.min(...numArray);

    console.log(highestNumber, lowestNumber)
}

highAndLow("8 -2 -30.8 0 15");
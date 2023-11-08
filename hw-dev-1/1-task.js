
'use strict';

function sum(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;

    if (number < 0) {
        return 0;
    }
}

const result = sum(16)
console.log(result);

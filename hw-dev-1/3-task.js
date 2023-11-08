'use strict';

function findNb(number) {
    let sum = 0;
    let n = 1;

    while (sum < number) {
        sum += n**3;
        if (sum === number) {
            return n;
        }
        n++;
    }

    return -1;
}
console.log(findNb(1071225));
console.log(findNb(10712250));
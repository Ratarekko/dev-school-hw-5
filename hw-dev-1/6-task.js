'use strict';

function rearrangeDigits(number) {
    const toArray = number.toString().split('');
    const sorted = toArray.sort((a, b) => b - a);
    const result = parseInt(sorted.join(''), 10);

    return result;
}

console.log(rearrangeDigits(4210445));
'use strict';

function minMoves(n) {
    let result = 2 ** n - 1;
    return result;
}
console.log(minMoves(5));
// Так і не зміг придумати адекватний розв'язок без готової формули :(
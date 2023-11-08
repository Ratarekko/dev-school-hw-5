function calculatePerimeter(array) {
    const rows = array.length;
    const columns = array[0].length;

    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (array[i][j] === 'X') {
                if (j === 0 || array[i][j - 1] === 'O') perimeter++;
                if (j === columns - 1 || array[i][j + 1] === 'O') perimeter++;
                if (i === 0 || array[i - 1][j] === 'O') perimeter++;
                if (i === rows - 1 || array[i + 1][j] === 'O') perimeter++;
            }
        }
    }

    return perimeter;
}

console.log(calculatePerimeter([
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']));
console.log(calculatePerimeter([
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']));
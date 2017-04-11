function rosseta(input) {
    let n = Number(input.shift());
    let matrix = input.map(row => row.split(" ").map(Number));
    let templateMatrix = matrix.splice(0,n);

    let result = "";

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let currentCell = matrix[row][col];
            let shifter = templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
            result += String.fromCharCode(((currentCell + shifter) % 27) + 64);
        }
    }
    result = result.replace(/@/g, ' ');
     //console.log(result);
}
rosseta([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]);

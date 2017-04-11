function arithmephile(input) {
    let result = Number.NEGATIVE_INFINITY;
    input = input.map(Number);
    let calculation = [];
    let localSeq = 0;
    let startSeq = 0;

    for (let i = 1; i <= input.length; i++) {

        if(input[i] > 0 && input[i] < 10){
            localSeq = input[i];
            startSeq = i;
            calculation = input.slice((startSeq + 1),(localSeq + startSeq + 1));
            calculation = calculation.reduce((a,b) => a * b);
            if(calculation > result){
                result = calculation;
            }

        }
    }
    console.log(result);
}
arithmephile([
    '18',
    '42',
    '19',
    '36',
    '1',
    '-297',
    '38',
    '100',
    '9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27'
]);
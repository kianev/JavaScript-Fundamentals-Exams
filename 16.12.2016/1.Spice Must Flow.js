
function spice(input) {
    let startingYield = Number(input);
    let daysMined = 0;
    let yieldMined = 0;

    while (startingYield >= 100){
        daysMined++;
        yieldMined += startingYield;
        startingYield -= 10;
        yieldMined -= 26;
    }
    yieldMined -= 26;
    if(yieldMined < 0){
        yieldMined = 0;
    }
    console.log(daysMined);
    console.log(yieldMined);
}

spice(20);
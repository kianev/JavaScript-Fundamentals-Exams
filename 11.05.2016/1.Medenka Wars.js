function medenkaWars(input){
    let vitkorWhite = [];
    let naskorDark = [];
    let whiteBonusCount = 0;
    let darkBonusCount = 0;
    let whiteLastAttack = -1;
    let darkLastAttack = -1;
    let whiteBonusCountSum = 0;
    let darkBonusCountSum = 0;

    for (let i = 0; i < input.length; i++) {
        let [damage, fraction, medenka] = input[i].split(" ");
        damage = Number(damage);
        if(fraction == "white"){
            vitkorWhite.push(damage * 60);
            if(whiteLastAttack == damage){
                whiteBonusCount++;
                console.log(whiteBonusCount);
                if(whiteBonusCount == 5){
                    whiteBonusCountSum += (damage * 60 * 4.5) - (damage * 60);
                    whiteBonusCount = 0;
                }
            }else{
                whiteLastAttack = damage;
                whiteBonusCount = 1;
            }

        }else if(fraction == "dark"){
            naskorDark.push(damage * 60);
            if(darkLastAttack == damage){
                darkBonusCount++;
                if(darkBonusCount == 2){
                    darkBonusCountSum += (damage * 60 * 2.75) - (damage * 60);
                    darkBonusCount = 0;
                }
            }else{
                darkLastAttack = damage;
                darkBonusCount = 1;
            }
        }
    }

    let vitkorResult = vitkorWhite.reduce((a,b) => a + b) + whiteBonusCountSum;
    let naskorResult = naskorDark.reduce((a,b) => a + b) + darkBonusCountSum;

    if(vitkorResult > naskorResult){
        console.log("Winner - Vitkor");
        console.log("Damage - " + vitkorResult);
    }else{
        console.log("Winner - Naskor");
        console.log("Damage - " + naskorResult);
    }
}


medenkaWars([
 '5 white medenkas',
    '5 white medenkas',
    '5 white medenkas',
    '5 white medenkas',
    '5 white medenkas',
 '5 dark medenkas',
 '4 white medenkas']);


/*medenkaWars([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas']);*/

medenkaWars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas']);
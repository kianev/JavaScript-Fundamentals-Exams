function medenkaWars(input){
    let medenkaDamage = 60;
    let damageDone = 0;
    let whitePoints = 0;
    let darkPoints = 0;
    let whiteBonusCount = 0;
    let darkBonusCount = 0;
    let whiteLastAttack = -1;
    let darkLastAttack = -1;

    for (let i = 0; i < input.length; i++) {
        let [damage, fraction] = input[i].split(" ");
        damage = Number(damage);
        let damageDone = medenkaDamage * damage;

        if(fraction === "white"){
            whiteBonusCount++;
            if(whiteLastAttack == damage){
                if(whiteBonusCount == 5){
                    damageDone = damageDone *= 4.5;
                    whiteBonusCount = 0;
                }
            }else{
                whiteLastAttack = damage;
                whiteBonusCount = 1;
            }
            whitePoints += damageDone;

        }else if(fraction === "dark"){
            darkBonusCount++;
            if(darkLastAttack == damage){
                if(darkBonusCount == 2){
                    damageDone = damageDone *= 2.75;
                    darkBonusCount = 0;
                }
            }else{
                darkLastAttack = damage;
                darkBonusCount = 1;
            }
            darkPoints += damageDone;
        }
    }


    if(whitePoints > darkPoints){
        console.log("Winner - Vitkor");
        console.log("Damage - " + whitePoints);
    }else{
        console.log("Winner - Naskor");
        console.log("Damage - " + darkPoints);
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
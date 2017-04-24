function examResult(input) {
    let courseNeeded = input[input.length-1];
    input.pop();
    let average = 0;
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        let [name, course, examPoints, bonusPoints] = input[i].split(" ").filter(t => t != "");
        examPoints = Number(examPoints);
        bonusPoints = Number(bonusPoints);
        if(examPoints < 100){
            console.log(`${name} failed at "${course}"`);
        }else{
            let coursePoints = (examPoints / 5) + bonusPoints;
            let grade = (coursePoints / 80) * 4 + 2;
            if(grade > 6){
                grade = 6.00;
            }
            console.log(`${name}: Exam - "${course}"; Points - ${coursePoints}; Grade - ${grade.toFixed(2)}`)
        }

        if(courseNeeded == course){
            average += examPoints;
            counter++;
        }
    }
    let averagePoints = average/counter;
   console.log('"' + courseNeeded + '"' + ' ' + 'average points ->' + ' '+ averagePoints);
}
/*examResult([
    'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
]);*/

   examResult([
           "Bankin    HTML&CSS                0          0",
           "RoYaL        HTML5&CSS        340         10",
           "Bi0GaMe      Java   10    10",
           "Stamat HQC   190 10",
           "MINKA OOP   230 10",
           "Java"
       ]);
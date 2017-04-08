function buildWall(input) {
     input = input.map(Number);
     let daysArr = [];
     let completed = true;

     while (completed) {
         let concretePerDay = 0;
         completed = false;
         for (let i = 0; i < input.length; i++) {
             if (input[i] < 30) {
                 concretePerDay += 195;
                 input[i] += 1;
                 completed = true;
             }
         }
         if(completed)daysArr.push(concretePerDay);
     }
     let total = daysArr.reduce((a,b) => a + b);
     console.log(daysArr.join(", "));
    console.log(total*1900 + " pesos");
}
buildWall([21,25,28]);
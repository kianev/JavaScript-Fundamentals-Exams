function filteredMatrix(input) {
   let n = Number(input.pop());
   let array = input.join(" ").split(" ");
   let currentCount = 1;

    for (let i = 0; i < array.length; i++) {
        if(array[i] == array[i + 1]){
            currentCount++;
            if(currentCount == n){
                for (let j = i + 1; j > i + 1 - currentCount; j--) {
                      array[i] = false;
                }
                currentCount = 1;
            }
        }else{
            currentCount = 1;
        }
    }

    let newArray = [];
    let index = -1;
    for (let i = 0; i < input.length; i++) {
        let currRow = input[i].split(" ");
        let filteredRow = [];
        for (let j = 0; j < currRow.length; j++) {
            if(array[++index] != false){
                filteredRow.push(array[index]);
            }
        }
        newArray.push(filteredRow);
    }
    while (newArray.length > 0){
        let row = newArray.shift();
        if(row.length > 0){
            console.log(row.join(" "))
        }else {
            console.log("(empty)");
        }
    }
}
filteredMatrix([
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2']);
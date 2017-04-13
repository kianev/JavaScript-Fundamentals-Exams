function dataBase(input) {
    let entries = new Map;
    let subscribers = new Map;
    for (let i = 0; i < input.length; i++) {
        let extracted = input[i].split("-");
        if(extracted.length == 1){
            if(!entries.has(extracted[0])){
                entries.set(extracted[0], new Set());
                subscribers.set(extracted[0], new Set());
            }
        }else if(extracted.length == 2){
            if(entries.has(extracted[0]) && entries.has(extracted[1])){
                entries.get(extracted[1]).add(extracted[0]);
                subscribers.get(extracted[0]).add(extracted[1]);
            }
        }
    }
    let sorted = [...entries.keys()].sort(function (a,b) {
        if(entries.get(a).size == entries.get(b).size){
            return subscribers.get(b).size - subscribers.get(a).size;
        }
        return entries.get(b).size - entries.get(a).size;
    });

    let mostSubscr = sorted[0];
    console.log(mostSubscr);

    let counter = 1;
    entries.get(mostSubscr).forEach(function (e) {
        console.log(counter + ". " + e);
        counter++;
    });
}
/*dataBase([
    'A',
    'B',
    'A-B',
    'C',
    'C-B',
    'D',
    'D-B',
    'E',
    'E-B',
    'A-C',
    'D-C',
    'E-C'
]);*/

dataBase([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A']);


function minka(input) {
    let list = {};
    for (let i = 0; i < input.length; i++) {
        let [name, type, number, score, lines] = input[i].split(" & ");
        let taskNumber = "Task " + number;
        if(!list.hasOwnProperty(taskNumber)){
            list[taskNumber] = {tasks: [], average: 0, lines: 0, score: 0};
        }
        list[taskNumber].tasks.push({name: name,type: type});
        list[taskNumber].lines += Number(lines);
        list[taskNumber].score += Number(score);
        list[taskNumber].average = averages(
            list[taskNumber].score, list[taskNumber].tasks.length);

    }
    for (let key of Object.keys(list)) {
        delete list[key].score;
    }

    function averages(sum, score) {
        return Math.round((sum/score) * 100) / 100;
    }

    function sortList(a,b,list) {
        let avSortA = list[a].average;
        let avSortB = list[b].average;
        if(avSortA == avSortB){
            let lineSortA = list[a].lines;
            let lineSortB = list[b].lines;
            return lineSortA - lineSortB;
        }
        return avSortB - avSortA;
    }

    let sorted = [...Object.keys(list).sort((a,b) => sortList(a,b,list))];
    let result = {};

    for (let item of sorted) {
        list[item] = list[item].tasks.sort((a,b) => a.name.localeCompare(b.name));
        result[item] = list[item];
    }
    console.log(JSON.stringify(result));
}
minka([
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81']);
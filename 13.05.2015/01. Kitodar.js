function calcOre(input) {
     let pattern = /^mine\s+(?:[^\s]+\s+)?-\s*(gold|silver|diamonds)\s*:\s*(\d+)$/;
     let ores = {};
     ores["silver"] = 0;
     ores["gold"] = 0;
     ores["diamonds"] = 0;

    for (let line of input) {
        let match = line.match(pattern);
        if(match){
            ores[match[1]] += Number(match[2]);
        }
    }
    for (let result in ores) {
        console.log(`*${result[0].toUpperCase() + result.substring(1,result.length)}: ${ores[result]}`);
    }
}
calcOre([
    'mine bobovdol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver:  14',
    'mine silver:14 - silver: 14']);

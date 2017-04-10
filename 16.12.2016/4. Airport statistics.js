function airportStat(input) {
    let planesLeft = new Set();
    let towns = new Map();
    let arrivals = 0;
    let departures = 0;

    for (let i = 0; i < input.length; i++) {
        let [planeID, town, passengers, action] = input[i].split(" ");
         passengers = Number(passengers);

        if (action == 'depart') {
            if (!planesLeft.has(planeID)) continue;
            else {
                planesLeft.delete(planeID);
            }
        }
        if (action == 'land') {
            if (planesLeft.has(planeID)) continue;
            else {
                planesLeft.add(planeID);
            }
        }

        if(!towns.has(town)){
            towns.set(town, {arrivals: 0, departures: 0, planesLeft: []})
        }
        if (!towns.get(town).planesLeft.includes(planeID)) {
            towns.get(town).planesLeft.push(planeID);
        }

        if(action == "land") towns.get(town).arrivals += passengers;
        else towns.get(town).departures += passengers;


    }

    planesLeft = [...planesLeft].sort((a,b) => a.localeCompare(b));
    console.log("Planes left:");
    for (let planes of planesLeft) {
        console.log("- " + planes);
    }
   let townsSorted = [...towns].sort((t1,t2) =>{
       if (t1[1].arrivals < t2[1].arrivals) return 1;
       if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    });

    for (let [town, townData] of townsSorted) {
        console.log(town);
        console.log("Arrivals: " + townData.arrivals);
        console.log("Departures: " + townData.departures);
        console.log("Planes:");
        townData.planesLeft.sort((a,b) => a.localeCompare(b)).forEach(p => console.log("-- " + p));
    }
}
/*airportStat([
    'Boeing474 Madrid 300 land',
    'AirForceOne WashingtonDC 178 land',
    'Airbus London 265 depart',
    'ATR72 WashingtonDC 272 land',
    'ATR72 Madrid 135 depart']);*/

airportStat([
    'Airbus Paris 356 land',
    'Airbus London 321 land',
    'Airbus Paris 213 depart',
    'Airbus Ljubljana 250 land']);
function spyMaster(input) {
  let specialKey = input.shift();
  let regEx = new RegExp(`( |^)(${specialKey})(\\s+[A-Z!%$#]{8,})( |\\.|,|$)`, 'ig');

    for (let match of input) {
        let data = match.replace(regEx, function (match, group1, group2, group3, group4) {
            let encoded = group3;
            if(encoded.match(/(\s+[A-Z!%$#]{8,})/)){
                encoded = encoded.replace(/\!/g, "1").replace(/%/g, "2").replace(/#/g, "3").replace(/\$/g, "4").toLowerCase();
            }
            return (group1 + group2 + encoded + group4);
        });
        console.log(data);
    }
}
spyMaster([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);

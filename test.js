const fs = require('fs');

fs.readFile('data/winequality-red.csv', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
    parseData(data.toString());
});

function parseData(data) {
    let csvData = [];
    let lbreak = data.split("\n");

    let quality = [];

    lbreak.forEach(res => {
        csvData.push(res.split(";"));
    });

    csvData.forEach(res => {
        quality.push(res[11]);
    });

    console.log(quality);
}
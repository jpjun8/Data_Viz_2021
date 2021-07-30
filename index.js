var obj_csv = {
  size: 0,
  dataFile: []
};

function readImage(input) {
  console.log(input);
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.readAsBinaryString(input.files[0]);
    reader.onload = function (e) {
      console.log(e);
      obj_csv.size = e.total;
      obj_csv.dataFile = e.target.result;
      console.log(obj_csv.dataFile);
      parseData(obj_csv.dataFile);
    }
  }
}

function parseData(data) {
  let csvData = [];
  let lbreak = data.split("\n");

  let quality = [];

  lbreak.forEach(res => {
    csvData.push(res.split(";"));
  });

  csvData.forEach(res => {
    quality.push(res[11]);
    // console.log(res[11]);
  })
  // console.log(csvData[0][11]);
  console.log(quality);
}

showPH = function () {
  // document.getElementById('redpH').innerHTML = "RED PH BRO";
  var data = [4, 8, 15, 16, 23, 42];
  document.getElementById("spanred").innerHTML = data;
  d3.select(".chart")
    .selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("width", 19)
    .attr("x", function (d, i) {
      return 20 * i
    })
    .attr("height", 20)
    .attr("y", 400)
    .transition()
    .attr("height", function (d) {
      return 10 * d
    })
    .attr("y", function (d) {
      return 420 - 10 * d
    });

  console.log("showPH");
}

showAcid = function () {
  console.log("showAcid");
}

showAlcohol = function () {
  console.log("showAlcohol")
}
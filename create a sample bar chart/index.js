var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);

// create a background for bar chart
var svg = d3.select("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
            
// create barchart
var barChart = svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("y", function(d) {return svgHeight - d}) // background
                  .attr("height", function(d) {return d}) // data
                  .attr("width", barWidth - barPadding)
                  .attr("transform", function (d, i) {var translate = [barWidth*i, 0];
                                     return "translate(" + translate + ")";});

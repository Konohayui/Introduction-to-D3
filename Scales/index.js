 // javascript
var dataset = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)]) // x = [0, 5]
    .range([0, svgHeight]);       // y = [0, 300]
// a map that works as follow: f(x) = 60*x
// yScale(1) = 60, yScale(2) = 120, yScale(3) = 180, yScale(4) = 240, yScale(5) = 300

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "bar-chart")
    .attr("y", function(d) {
         return svgHeight - yScale(d) + 30;
    })
    .attr("height", function(d) { 
        return yScale(d); 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text = svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .attr("class", "text")
              .text(function(d) {return d;})
              .attr("x", function(d, i) {return barWidth * i + barWidth/2;})
              .attr("y", function(d, i) {return svgHeight - yScale(d) + 25;})
              .attr("fill", "#000000");


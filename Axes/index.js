var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var svgWidth = 500, svgHeight = 300, margin = 30;
var barWidth = (svgWidth/dataset.length);
 
var svg = d3.selectAll("svg")
            .attr("width", svgWidth + 2*margin)
            .attr("height", svgHeight + 2*margin)
            .append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");
                                     
var xScale = d3.scaleLinear()
               .domain([0, dataset.length])
               .range([0, svgWidth]);
               
var yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset)])
               .range([svgHeight, 0]);
               
var x_axis = d3.axisBottom()
               .scale(xScale);
               
var y_axis = d3.axisLeft()
               .scale(yScale);
   
var barChart = svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                //   .attr("x", function(d, i) {return xScale(i);})
                  .attr("y", function(d) {return yScale(d)})
                  .attr("height", function(d) {return svgHeight - yScale(d)})
                  .attr("width", barWidth)
                  .attr("class", "bar")
                  .attr("transform", function (d, i) {var translate = [barWidth*i, 0];
                                     return "translate(" + translate + ")";});
                                     
var text = svg.selectAll("text")
              .data(dataset)
              .enter()
              .append("text")
              .text(function(d) {return d;})
              .attr("y", function(d) {return yScale(d) - 2;})
              .attr("x", function(d, i) {return barWidth * i + barWidth/2 - 10;})
              .attr("fill", "#000000");
              
svg.append("g")
   .call(y_axis);

svg.append("g")
   .attr("transform", "translate(0, " + svgHeight + ")")
   .call(x_axis);                                     
            

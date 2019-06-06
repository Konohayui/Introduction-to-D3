var group_A = [25, 30, 66, 78, 35, 10, 55, 50];
var group_B = [10, 70, 52, 66, 13, 84, 12, 45];
var svgWidth = 500, svgHeight = 300, margin = 30;

function plot(data) {
	var svg = d3.selectAll("svg")
						.attr("width", svgWidth + 2*margin)
            .attr("height", svgHeight + 2*margin)
            .append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");
            
	var barWidth = svgWidth/data.length;
  
  var xScale = d3.scaleLinear()
  							 .domain([0, data.length])
                 .range([0, svgWidth]);
                 
  var yScale = d3.scaleLinear()
  							 .domain([0, d3.max(data)])
                 .range([svgHeight, 0]);
                 
                 
  var xaxis = d3.axisBottom()
  						  .scale(xScale);
  
  var yaxis = d3.axisLeft()
  							.scale(yScale);
                
  var barChart = svg.selectAll("rect")
  									.data(data)
                    .enter()
                    .append("rect")
                    .attr("fill", "lightskyblue")
                    .attr("y", function(d) { return yScale(d); })
                    .attr("height", function(d) { return svgHeight - yScale(d); })
                    .attr("width", barWidth)
                    .attr("transform", function(d, i) {
                    	var translate = [barWidth*i, 0];
                      return "translate(" + translate + ")";
                    });
                    
  var text = svg.selectAll("text")
  							.data(data)
                .enter()
                .append("text")
                .text(function(d) { return d; })
                .attr("y", function(d) { return yScale(d) - 2; })
                .attr("x", function(d, i) { return barWidth*i + barWidth/2 - 10; })
                .attr("fill", "#000000");
                
  svg.append("g")
  	 .attr("transform", "translate(0," + svgHeight + ")")
  	 .call(xaxis);
     
  svg.append("g")
  	 .call(yaxis);
                    
}


document.getElementById("group-A").onclick = function() { d3.selectAll("svg > *").remove(); plot(group_A) };      
document.getElementById("group-B").onclick = function() { d3.selectAll("svg > *").remove(); plot(group_B) };      
document.getElementById("Both").onclick = function() { d3.selectAll("svg > *").remove(); plot(group_A.concat(group_B)) };      

plot(group_A.concat(group_B))

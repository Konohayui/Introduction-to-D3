// javascript
var dataset = [1, 2, 3, 4, 5];

// create a heading
d3.select("body")
  .append("h2")
  .attr("class", "heading")
  .text("This is a new header in color blue")
  .style("color", "blue")
  .style("font-size", "36px")
    
// append paragraph for each data element
d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) {return d;});
  
  

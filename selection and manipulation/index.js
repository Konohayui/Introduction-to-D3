// javascript
d3.select(); // get a specific element
d3.selectAll(); // get all emelemts

d3.select('h2').style('color', 'red')
.attr('class', 'heading')
.text('Updated h2 (second heading) tag');

// add new elements
d3.select('body').append('h1').text('A New Header');
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

// change paragraph style
d3.selectAll('p').style('color', 'blue');
d3.selectAll('p').style('font-size', '16px');

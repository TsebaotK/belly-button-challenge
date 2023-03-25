var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Fetch the JSON data 
var datas = d3.json(url).then(function(data) {
  console.log("datas: ", data);
});

// For loop to populate arrays
for (var i = 0; i < datas.length; i++) { 
    // Create items array
    var items = Object.keys(datas).map(function(key) {
      return [key, datas[samples[sample_values]]];
    });
    console.log("items: ", items);

    // Sort the array based on the second element
    var sorted = items.sort(function (first, second) {
      return second[1] - first[1];
    });
    console.log("sorted: ", sorted);

    // Reverse the array to accommodate Plotly's defaults
    var reversedArray = sorted.reverse();
    console.log("reversed Array: ", reversedArray);

    // Create a new array with only the first 10 items
    var slicedData = console.log(reversedArray.slice(0, 10));
    console.log("sliced Data: ", slicedData);

  
    // ----
    var trace1 = {
        x: slicedData.map(row => row.samples[sample_values]),
        y: slicedData.map(row => row.otu_idsThan),
        text: slicedData.map(object => object.otu_labels),
        type: 'bar',
        orientation: "h"
    }

    // ----
    var trace2 = {
      x: datas.otu_ids,
      y: datas.sample_values,
      text: slicedData.otu_labels,
      mode: 'markers',
      marker: {
          size: slicedData.sample_values,
          color: slicedData.otu_ids
      }
    }
}
// Data trace array
var barChart = [trace1];
var bubbleChart = [trace2];
// var guageChart = [trace3];

let layout = {
  title: "title"
};


// Render the plot to the div tag with id "bar"
Plotly.newPlot("bar", barChart, layout);

// Render the plot to the div tag with id "gauge"
Plotly.newPlot("gauge", guageChart, layout);


// Render the plot to the div tag with id "bubble"
Plotly.newPlot("bubble", bubbleChart, layout);

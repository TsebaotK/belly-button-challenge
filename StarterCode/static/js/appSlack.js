var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initialization function
function initialization() {
  d3.json(url).then((data) => {
    
    // Fetch the names JSON data 
    let names = data.names

    // For loop to populate name array
    for (var i = 0; i < names.length; i++){ 
      console.log(`name${[i]} : ${names[i]}`)}
  }
)};

initialization()


// demoInfo function 
function demoInfo() {
  d3.json(url).then((data) => {
   
    // Fetch the metadata JSON object 
    let metadata = data.metadata
    let id = []
    let ethnicity = []
    let gender = []
    let location = []
    let bbtype = []
    let wfreq = []

     // For loop to populate metadata arrays
    for (var i = 0; i < metadata.length; i++) {
      row = metadata[i];
      if (row.id == initialization()){
        id.push(row.id[i])
        ethnicity.push(row.ethnicity);
        gender.push(row.gender);
        age.push(row.age);
        location.push(row.location);
        bbtype.push(row.bbtype);
        wfreq.push(row.wfreq);
      }
    }  
  }
)};


// check function  
function graph() {
  d3.json(url).then((data) => {

    // Initialized arrays
    let samples = data.samples
    let id = []
    let otuId = []
    let sampleValues = []
    let otuLabels = []

    // For loop to populate arrays
    for (var i = 0; i < samples.length; i++) {
      row = samples[i];
      if (row.id == initialization()){
        id.push(row.id);
        otuId.push(row.otu_ids);
        sampleValues.push(row.sample_values);
        otuLabels.push(row.otu_labels);
      }
    }  
    var trace1 = {
      x: sampleValues[0],
      y: otuId[0],
      text: otuLabels[0],
      type: 'bar',
      orientation: "h"
    }
    var trace2 = {
      x: otuId[0],
      y: sampleValues[0],
      text: otuLabels[0],
      mode: 'markers',
      marker: {
        size: sampleValues[0],
        color: otuId[0]
      }
    }
  }
)};

 
// Data trace array
var barChart = [trace1];
var bubbleChart = [trace2];
// var guageChart = [trace3];


// Render the plot to the div tag with id "bar"
Plotly.newPlot("bar", barChart, layout);

// Render the plot to the div tag with id "gauge"
// Plotly.newPlot("gauge", guageChart);


// Render the plot to the div tag with id "bubble"
Plotly.newPlot("bubble", bubbleChart, layout);



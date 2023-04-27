var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Initialization function
function init() {
  // Fetch the names JSON data 
  d3.json(url).then((data) => {
    // assign the names array to sampleNames variable
    sampleNames = data.names;
    // select the selDataset id and assign it to name variable
    let name = d3.select("#selDataset");
    // for loop inside the names data (sampleNames)
    for (let i = 0; i < sampleNames.length; i++) {
      // append the sampleNames data to the option list
      name.append("option").attr("value", sampleNames[i]).text(sampleNames[i]);
      console.log(name)
    }
    // initialize the demographic and graph function with the index zero value of sampleNames
    demographic(sampleNames[0]),
      graph(sampleNames[0]);
  })
};

init()


// load the demographic and graph function when the optionchanged function is called 
function optionChanged(selectedId) {
  demographic(selectedId)
  graph(selectedId);
}


// demographic function
function demographic(demoId) {
  // Fetch the metadata JSON object 
  d3.json(url).then((data) => {
    // assign the metadata object to metadata variable
    metadata = data.metadata

    // filter the metadata to create a new "selected" array that has id equal to metadataId 
    let selected = metadata.filter(metadataId =>
      metadataId.id == demoId
    );
    console.log(selected)
    // select the panel-body class and assign it to demoInfo variable
    let demoInfo = d3.select(".panel-body");
    // clear any existing metadata
    demoInfo.html("")

    // demoInfo.append("ul").text(`id: ${selected[0].id}`);
    // demoInfo.append("ul").text(`ethnicity: ${selected[0].ethnicity}`);
    // demoInfo.append("ul").text(`gender: ${selected[0].gender}`);
    // demoInfo.append("ul").text(`age: ${selected[0].age}`);
    // demoInfo.append("ul").text(`location: ${selected[0].location}`);
    // demoInfo.append("ul").text(`bbtype: ${selected[0].bbtype}`);
    // demoInfo.append("ul").text(`wfreq: ${selected[0].wfreq}`);

    // iterate through each key & vale pair returned from the `Object.entries` method 
    Object.entries(selected[0]).forEach(([key, value]) => {
      // append the key and value elements to the demoInfo 
      demoInfo.append("ul").text(`${key}: ${value}`);
    });
  }
  );
}


function graph(graphId) {
  // Fetch the samples JSON object 
  d3.json(url).then((data) => {
    // assign the samples object to samples variable
    samples = data.samples
    // filter the samples object to create a new "filtered" array that has id equal to namesId
    let filtered = samples.filter(samplesId =>
      samplesId.id == graphId
    );
    // assign the index [0] elements of the "filtered" object to the filtereddata variable 
    let filtereddata = filtered[0]
    console.log(filtereddata)
    // slice the first 10 elements of thesample_values, otu_ids & otu_labels arrays and assign them to their respective variable 
    let sampleValues = filtereddata.sample_values.slice(0, 10).reverse()
    let barOtuIds = filtereddata.otu_ids.slice(0, 10).map(otu_id => "OTU " + otu_id).reverse()
    let otuIds = filtereddata.otu_ids.slice(0, 10).reverse()
    let otuLabels = filtereddata.otu_labels.slice(0, 10).reverse()

      // Trace1 for the bar chart
    let trace1 = {
      x: sampleValues,
      y: barOtuIds,
      text: otuLabels,
      type: 'bar',
      orientation: "h"
    };

    // Trace2 for the bubble chart
    let trace2 = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds
      }
    };

    // Apply a title to the axes
    let layout1 = {
      title: {text: "The top 10 OTUs found"      },
      xaxis: { title: "Sample Values" },
      size: 18,
      bottommargin: 0
    }

    // Apply a title to the axes
    let layout2 = {
      title: "OTU ID vs Smaple Vlaues",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" }
    }

    // Data trace array
    let barChart = [trace1];
    let bubbleChart = [trace2];

    // Render the bar chart to the div tag with the "bar" id 
    Plotly.newPlot("bar", barChart, layout1);


    // Render the bubble chart to the div tag with the "bubble" id 
    Plotly.newPlot("bubble", bubbleChart, layout2);

  });
}







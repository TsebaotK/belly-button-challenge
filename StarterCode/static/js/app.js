var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";



// Initialization function
function initialization() {
  // Fetch the names JSON data 
  d3.json(url).then((data) => {
    names = data.names;

    let name = d3.select("#selDataset");
    for (let i = 0; i < names.length; i++) {
      name.append("option").attr("value", "names").text(names[i]);
      // console.log(names)
    }    
  })
};

initialization()


// Fetch the metadata JSON object 
d3.json(url).then((data) => {
  metadata = data.metadata

  let demoInfo = d3.select(".panel-body");
  // For loop to populate metadata arrays
  for (let i = 0; i < metadata.length; i++) {
    row = metadata[i];
    if (row.id == initialization[i]) {
      console.log("id", [i], ":", row.id[i])
      console.log("Ethnicity", [i], ":", row.ethnicity[i])
      console.log("gender", [i], ":", row.gender[i])
      console.log("age", [i], ":", row.age[i])
      console.log("location", [i], ":", row.location[i])
      console.log("bbtyoe", [i], ":", row.bbtype[i])
      console.log("wfreq", [i], ":", row.wfreq[i])
      demoInfo.append("ul").text(row.id);
      demoInfo.append("ul").text(row.ethnicity);
      demoInfo.append("ul").text(row.gender);
      demoInfo.append("ul").text(row.age);
      demoInfo.append("ul").text(row.location);
      demoInfo.append("ul").text(row.bbtype);
      demoInfo.append("ul").text(row.wfreq);
    }
  }
}
  // }
);




// Fetch the samples JSON object 
d3.json(url).then((data) => {

  // Initialized arrays
  samples = data.samples

  let sample = d3.select("#bar");
  // For loop to populate arrays
  for (let i = 0; i < samples.length; i++) {
    row = samples[i];
    if (row.id == initialization()) {
      console.log(row.id);
      console.log(row.otu_ids);
      console.log(row.sample_values);
      console.log(row.otu_labels);
      // sample.append("ul").text(row.id);
      // sample.append("ul").text(row.id);
      let trace1 = {
        x: row.sample_values[0],
        y: row.otu_ids[0],
        text: row.otu_labels[0],
        type: 'bar',
        orientation: "h"
      };

      let trace2 = {
        x: row.otu_ids[0],
        y: row.sample_values[0],
        text: row.otu_labels[0],
        mode: 'markers',
        marker: {
          size: row.sample_values[0],
          color: row.otu_ids[0]
        }
      };

      // Data trace array
      let barChart = [trace1];
      let bubbleChart = [trace2];
      // var guageChart = [trace3];

      // Render the plot to the div tag with id "bar"
      Plotly.newPlot("bar", barChart, layout);

      // // Render the plot to the div tag with id "gauge"
      // // Plotly.newPlot("gauge", guageChart);


      // Render the plot to the div tag with id "bubble"
      Plotly.newPlot("bubble", bubbleChart, layout);
      // }
    }
  }
});








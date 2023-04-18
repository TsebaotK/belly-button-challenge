# belly-button-challenge

For this assignment, I created an interactive dashboard that explores the provided Belly Button Biodiversity dataset. I wrote my code on the app.js javascript that is connected to the index HTML, 
The steps taken 
•	I used the d3 library to read the provided URL link.
•	I created an initialization function that populates the selection option with a list of name IDs from the names array.
•	I created demographic information that displays each key-value pair from the metadata JSON object. This information changes with changes in the selected names ID
•	Based on the selected name id, I created a horizontal bar chat that displays the top 10 OTUs found in the sample values
•	I made a bubble chart with the out_ids as its x value and sample_values y value. This bubble chart changes as the selected names Id changes. 

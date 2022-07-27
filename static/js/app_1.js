// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// d3 is a JavaScript library used to produce dynamic graphics in an HTML webpage
// tbody is a standard table tag used in HTML
var tbody = d3.select("tbody");

// function to iterate through the data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

function handleClick(){
    // .select() the very first element that matches our selector string datetime
    //the selector string is the item we're telling D3.js to look for
    // /property('value') tells the code to grab the info and hold it in the date var
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

     // Check to see if a date was entered and filter the
     // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    
    // attatch an event to listen for the form button
    // #filter-btn is the selector string
    d3.selectAll("#filter-btn").on("click", handleClick);
};
// build the table when the page loads
buildTable(tableData);

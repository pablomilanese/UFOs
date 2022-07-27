# UFOs

## OVERVIEW
The purpose of this project was to create a webpage with a dinamic table. The dinamic table includes UFO sighting information across different countries, states and dates. The data also includes the shape of the sighting and a brief description. With the inclusion of the table in the webpage people can filter the table by location, date and shape. The page also includes a title and a brief paragraph talking about UFO sightings.

This project was completed using:  
`javascript`  
`bootstrap`  
`html`  
`css stylesheets`

## RESULTS
The user can scroll through the full set of information on the website or use the filters on the left side.

<img width="1267" alt="image" src="https://user-images.githubusercontent.com/105120795/181176861-777580c1-7bde-4984-8cf6-d1f915b7cba5.png">

They may filter by date, city, state, country or shape.  
The webpage also allows a combination of filters to narrow down the search even further:  

<img width="1268" alt="image" src="https://user-images.githubusercontent.com/105120795/181177357-5846a0bc-9d32-4368-94d8-e76f8bec56f0.png">

In order to go back to the original table they can delete the input values or click on 'UFO SIGHTINGS' on the top of the webpage.
It is also important to note that the user inputs a value and presses enter to get filtered results. There is not a button for the user to press.

## SUMMARY
One major drawback is that the filters need to be in the same format as the one on the table. For example, the filter cannot find 'CA' under states given that the values for UFO sightings in California is spelled 'ca'. Spaces at the end, beginning or in the middle of the search will return no results as well.

##### RECOMMENDATIONS  
How a user employs the webpage should be taken into consideration. They might be interested in the amount of sightings in a specific state or in a specific range of months. Searching a UFO sighting by a specific date can be cumbersome given that the user would have to know the exact date when the sighting ocurred. Instead, tt would be useful to include a Date filter that allows the user to search by month or year instead of a complete date. This can be achieved by including a function that can catch MM/YYYY and YYYY input values.

Another recommendation is to add a 'clear' button under the filters. Having to delete each input takes away from the user experience. We could achieve this by creating a button that returns the user to the original `index.html`.

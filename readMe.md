# readMe - Ireland’s Employment Distribution

## The Idea

The Idea was to take the data for employment in a few sectors in the Irish economy and present in a visually appealing and interactive way, how employment has been doing in each of those sectors over time since the global economy meltdown in 2008.  The data has been sourced from [Data.gov.ie](https://data.gov.ie).


## UX

**The project’s target audience**: The target audience is someone looking to see how employment has been doing in a few specific sectors in the Irish economy from 2008, the year of the global economic meltdown to 2017. Here are the sectors of the Irish economy explored in the project:

Chemicals, Clothing | Footwear and Leather | Computer, Electronic and Optical Equipment | Construction, Energy, Water and Waste | Drink and Tobacco | Food | Medical and dental instruments and supplies | Computer programming activities | Financial Services.

**What my target audience wants to achieve**: The goal of the target audience would be to easily understand how employment in the sectors mentioned above has been doing since 2008. They are looking for interactive visualisation of data which will help them to filter through the data to get a better understanding without putting in a lot of effort.

**How my project will help the audience achieve their goals**: The data presented through interactive charts helps the audience understand the data better. The users can filter through the data based on the year, the type of employment i.e. full-time or part-time, and also helps them to understand the growth/decline of the employment in each sector through the lines in the composite chart.

Wireframe link -  [wireframes](https://github.com/ablshk/interactivecharts/tree/master/wireframes) 

**The Font**: The choice to go with the ‘Permanent Marker’ font from Google fonts was deliberate. The idea was to make the presentation of the website to feel fresh and fun, not just another data presentation site. Initial experiments with odd fonts led to the site looking very unprofessional. But I felt that the ‘Permanent Marker’ font struck a good balance between legibility and style well enough to make it fun, aesthetically pleasing and functionally effective at the same time.


## Features

### Home

**Bar Chart**:

The bar chart shows the number of employees in each sector.

By default, the bar chart shows an aggregated number of employees in each sector from 2008 to 2017.  You can use the selector above the chart to filter through data for each year from 2008 to 2017. Hovering the cursor over a sector also reveals the number of employees in the sector.

**Pie Chart**:

The pie chart shows at a glance the split between part-time and full-time employment. Click on either part-time or full-time to view data relevant to that type of employment. Hover on either part-time or full-time section to reveal the number of employees in that type of employment.

**note: The part-time employment category also includes short-term contract work.

**Composite Chart**:

The composite chart is meant to show at a glance growth/decline in employment in each sector over time. Hover over the legend of each sector to highlight the curve of that particular sector.

### Guide

This page contains information about the data used and also has directions for how the charts can be used.

### Data Source

Clicking on this option in the navbar opens the [Data.gov.ie](https://data.gov.ie) site from where the data used for the charts has been sourced.

### Contact

Clicking on this option scrolls the page down to the footer where the contact information is present.


## Future Feature Plans

* Create more charts to expand on the effectiveness of the data visualisation
* Add more sectors from the Irish economy to the data
* Keep updating the data as often as possible to keep it up-to-date


## Technologies Used

This project makes use of the following technologies:

* Html
* CSS
* JavaScript
* jQuery v3.3.1
* Bootstrap for CSS and JS v4.3.1
* dc.js v2.1.8
* d3.js v3.5.17
* crossfilter v1.3.12
* queue-async v1.0.7
* Chrome developer tools
* w3c markdown and css validator
* Font Awesome Icon Library v4.7
* GitHub / Git versioning
* JSHint


## Testing

**Testing for responsiveness**: Tested manually using Google Chrome developer tools.

**Testing CSS**: Tested using the w3C CSS validator.

**Testing HTML**: Tested using the w3C HTML/Markdown validator.

**Testing the charts**: The charts have been tested manually to make sure that they work as intended.

**JSHint**: JSHint was used to test and evaluate JavaScript.


## Deployment

Here is a link to the deployed live site: [Employment in Ireland (2008 - 2017)](https://ablshk.github.io/interactivecharts/)

The site has been deployed using GitHub/GitHub Pages.


## Acknowledgements
I would like to thank my mentors Seun Owonikoko and Xavier for their direction and help.
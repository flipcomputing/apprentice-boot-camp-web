---
layout: 'base.njk'
slide_number: 48
slide_prev: 'slide_047/'
slide_next: 'slide_049/'
section_title: 'Sequel-Mart'
slide_title: 'Routers'
theme: 'theme_005'
slide_layout: 'grid-1'
---

<section class="slide__text">

#### Routers and routes
As mentioned, the frontend app makes a request to a backend data store which issues a response to display

**Routers** = A pattern where the backend provides perscribed routes to the data that the frontend can call

**Routes** = A URL that the backend returns a result to and the frontend can use to populate the application

###### Router path
1. The HTML element has a data-url tag with the name of the route's URL page
2. An asynchronous request is made for this HTML element to be populated
3. The router's coordinator on the backend (app.js)
    - Connects to the database
    - Decides on the format of the output
    - Calls the route requested by the frontend
4. The route file gets the data with a SQL script and passes it back to app.js
5. app.js passes the result back to the frontend
6. The data is iteratively populated into the HTML element and will appear on the web page

<img class="bg-hidden" src="{{ '../../images/005_Router_Path.png' | url }}" />

</section>
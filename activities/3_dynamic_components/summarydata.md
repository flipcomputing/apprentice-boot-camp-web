## Update the component

- In `frontend-dashboard/src/App.js`, add a `backend` variable using the port you are using.

```javascript
const backend = "http://localhost:5001";
```

- In the same file, replace the `useEffect` code in your `SummaryData` component to `fetch` the data.

```jsx
 useEffect(() => {
    fetch(`${backend}/summary`)
      .then(response => response.json()) // parse the JSON response
      .then(data => setSummaryData(data[0])) // using the function provided by useState
      .catch(error => console.error('Error fetching summary data:', error));
  }, []); // The empty array makes sure the effect runs only once after the initial rendering
```

- Reload the Northern Store website

  You will see a CORS error in the console. (F12 to open Developer Tools)

## Allow the frontend-dashboard to access the backend endpoints

- Add the following lines to your `backend\app.js` - note that this is the **backend** folder. 

```javascript
const cors = require('cors');
```

and, after `app` is defined:

```javascript
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

The top of the file should look like this:

```javascript
const express = require('express');
const cors = require('cors');

//Initialise a port from an environment variable folder with 5000 as a failsafe default
const PORT = process.env.PORT || 5000;

//Initialise the express app
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
```
## Test again

- Reload the Northern Store website to see the live data instead of test data. 

//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info

/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.get('target page, (request, response), db.any = any number (unknown) of rows) */

router.get('/', (req, res) => {
  db.any(
    `
    SELECT * FROM "sequel-mart-schema".v_Product_Details
    `
  )
  .then(rows => {
    
    res.send(rows);
  })
  .catch(error => {
    console.log(error);
  })
})
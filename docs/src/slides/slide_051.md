---
layout: 'base.njk'
slide_number: 51
slide_prev: 'slide_050/'
slide_next: 'slide_052/'
section_title: 'Exercises'
slide_title: 'Customer View'
theme: 'theme_006'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Exercise 6.2 - Customers:

In pg-admin, create a SQL that does the following:

SELECTs
- `customer_name` (Customers)
    - Alias as `customer`
- Most recent `date_sale` (Sales Detail)
    - Alias as `most_recent`
    - HINT: Use the `MAX` aggregator for this
- Count the number of `sale_id`s for that customer (Sales Header)
    - Alias as `transactions`
- Average `revenue` for that customer (Sales Detail)
    - Alias as `avg_spend`
- Average number of `items_sold` (Sales Detail)
    - Alias as `avg_items`
- Average `feedback_score` (Sales Header)
    - Alias as `avg_feedback`

- Order by `average revenue` with the highest value first
- Limit the output to the first 10 rows only

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Top_Customers`
- Append SQL to `SELECT ... FROM` this `VIEW` into the space provided in line 13 of **backend/routes/customers.js**
- Save and close **backend/routes/customers.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/customers)](http://localhost:5001/customers)
    - This should be populated with an array of 10 objects for each customer
    - This is the data that our front-end will use to populate the Customers table

    `[{"customer":"Isabelle X.S.I","most_recent":"2021-05-07T18:46:46.573Z","transactions":"12","avg_spend":"24.31","avg_items":"5.67","avg_feedback":"4.3"},{"customer":"Austin B.P.E","most_recent":"2021-03-08T18:58:30.869Z","transactions":"6","avg_spend":"22.92","avg_items":"5.33","avg_feedback":"5.0"},{"customer":"Oakley H.D.N","most_recent":"2021-07-16T13:30:23.467Z","transactions":"20","avg_spend":"20.55","avg_items":"5.05","avg_feedback":"2.4"},{"customer":"Ezra Y.X.A","most_recent":"2021-04-09T02:53:32.620Z","transactions":"16","avg_spend":"20.48","avg_items":"5.31","avg_feedback":"4.0"},{"customer":"Summer R.C.V","most_recent":"2021-03-07T15:11:10.513Z","transactions":"48","avg_spend":"19.89","avg_items":"4.73","avg_feedback":"4.0"},{"customer":"Ava I.C.N","most_recent":"2021-01-10T17:56:12.911Z","transactions":"25","avg_spend":"18.17","avg_items":"4.60","avg_feedback":"1.3"},{"customer":"Harrison G.K.Z","most_recent":"2021-04-12T22:58:27.801Z","transactions":"17","avg_spend":"18.00","avg_items":"5.24","avg_feedback":"1.7"},{"customer":"Reggie P.D.T","most_recent":"2021-02-14T01:13:53.713Z","transactions":"55","avg_spend":"17.92","avg_items":"5.15","avg_feedback":"4.7"},{"customer":"Alfie I.U.B","most_recent":"2021-02-17T09:17:20.479Z","transactions":"69","avg_spend":"17.73","avg_items":"4.96","avg_feedback":"4.1"},{"customer":"Mia B.I.U","most_recent":"2021-03-09T02:48:42.068Z","transactions":"31","avg_spend":"17.62","avg_items":"4.74","avg_feedback":"4.4"}]`

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Customers table has been populated

</section>

<section class="slide__images">
<caption>1. Expected call to transactions route http://localhost:5001/customers</caption>
<img src="{{ '../../images/006_002_Customers_Route.png' | url }}" />
<caption>2. Expected Customer Table View</caption>
<img src="{{ '../../images/006_002_Customers.png' | url }}" />


</section>

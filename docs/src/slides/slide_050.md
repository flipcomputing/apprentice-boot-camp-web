---
layout: 'base.njk'
slide_number: 50
slide_prev: 'slide_049/'
slide_next: 'slide_051/'
section_title: 'Exercises'
slide_title: 'Transactions View'
theme: 'theme_006'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Exercise 6.1 - Transactions:

In pg-admin, create a SQL that does the following:

SELECTs
- Groups data by
- `sale_id` (Sales_Header)
    - Alias as `Transaction`
- `customer_name` (Customers)
    - Alias as `Customer`
- `date_sale` (Sales_Header)
    - Alias as `Date`
- `feedback_score` (Sales_Headers)
    - Alias as `Feedback`
- The total `revenue` for this transaction (Sales Detail)
    - Alias as `Amount`
- The total number of `items_sold` (Sales Detail)
    - Alias as `Items`

- Order by `date_sale` with the most recent date first
- Limit the output to the first 10 rows only

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Top_Transactions`
- Append SQL to `SELECT ... FROM` this `VIEW` into the space provided in line 13 of **backend/routes/transactions.js**
- Save and close **backend/routes/transactions.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/transactions)](http://localhost:5001/transactions)
    - This should be populated with an array of 10 objects for each transaction
    - This is the data that our front-end will use to populate the Transactions table

    `[{"transaction":39,"customer":"Lyra U.O.V","date":"2021-08-26T16:07:14.807Z","feedback":5,"amount":"2.49","items":"1"},{"transaction":555,"customer":"Olivia G.T.A","date":"2021-08-26T14:49:32.474Z","feedback":5,"amount":"131.82","items":"88"},{"transaction":488,"customer":"Lola P.S.W","date":"2021-08-26T11:53:48.687Z","feedback":1,"amount":"373.31","items":"89"},{"transaction":801,"customer":"Anna Y.O.J","date":"2021-08-26T11:18:48.930Z","feedback":5,"amount":"417.08","items":"91"},{"transaction":84,"customer":"Teddy P.N.I","date":"2021-08-26T08:07:35.143Z","feedback":5,"amount":"94.95","items":"16"},{"transaction":626,"customer":"Anna A.R.P","date":"2021-08-26T00:44:00.518Z","feedback":5,"amount":"193.65","items":"80"},{"transaction":330,"customer":"Eva M.M.T","date":"2021-08-25T14:23:32.497Z","feedback":5,"amount":"279.82","items":"107"},{"transaction":939,"customer":"Anna U.L.P","date":"2021-08-25T11:07:54.471Z","feedback":5,"amount":"98.28","items":"52"},{"transaction":282,"customer":"Jackson X.Y.A","date":"2021-08-25T10:26:32.825Z","feedback":1,"amount":"92.84","items":"17"},{"transaction":645,"customer":"Samuel U.U.J","date":"2021-08-24T06:18:32.166Z","feedback":4,"amount":"63.40","items":"42"}]`

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Transactions table has been populated

</section>

<section class="slide__images">
<caption>1. Expected call to transactions route http://localhost:5001/transactions</caption>
<img src="{{ '../../images/006_001_Transactions_Route.png' | url }}" />
<caption>2. Expected Transactions Table View</caption>
<img src="{{ '../../images/006_001_Transactions.png' | url }}" />

</section>

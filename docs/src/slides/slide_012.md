---
layout: 'base.njk'
slide_number: 12
slide_prev: 'slide_011/'
slide_next: 'slide_013/'
section_title: 'How do we create and query a relational database?'
slide_title: 'FROM...'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Tell the server where to look for the data

```
SELECT * | <value1>, <value2>
FROM <table_name>;
```

It's like saying: *"Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find this information, please read it back to me"*

##### For example:
Return a list of all products and all of their attributes to the results panel
```
SELECT *
FROM "sequel-mart-schema"."Products";
```
Return a list of all products and some of their attributes to the results panel
```
SELECT product_id, product_category, product_item, popularity
FROM "sequel-mart-schema"."Products";
```

##### Notes:
- You can drag the table from the browser into the Query Tool panel
- `SELECT *` is short-hand for 'include every column in the table'
  - This is good for profiling data in a test environment
  - For a production environment it is better to only use the columns you need
- The column names which were previously `?column?` are replaced with the name in the table
- The data type of the column is included
  - e.g. `product_item` only accepts varying character strings of no more than 50 characters

</section>


<section class="slide__images">
    <caption>1. Product table (all columns)</caption>
    <img src="{{ '../../images/002_FROM_Products_All.png' | url }}" />
    <caption>2. Product table (some of the columns)</caption>
    <img src="{{ '../../images/002_FROM_Products_Some.png' | url }}" />

</section>


<section class="slide__exercises">

---

  #### Exercises:
- Run SELECT * from each of the other 5 tables
- Familiarise yourself with the structure, and how it relates to the Entity Relationship diagram on the previous slide

</section>
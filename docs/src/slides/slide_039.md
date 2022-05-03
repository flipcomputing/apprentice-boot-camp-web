---
layout: 'base.njk'
slide_number: 39
slide_prev: 'slide_038/'
slide_next: 'slide_040/'
section_title: 'How do we change content?'
slide_title: Execution Plans
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### How Postgresql plans and executes a query
- PostgreSQL offers a tool to help work out:
    - How many resources a query is using
    - If it's blocking any other queries

- Tuning these queries can help:
    - Speed them up 
    - Free up resources for other queries

###### How do we access it?
- On the second panel down, next to the play button is an icon that when pressed 'Explains' a query (`F7` is the shortcut key)
- There are various options that give you more information but can increase the time it takes to run.

##### An example
Let's highlight the folowing SQL but run 'Explain' rather than 'Execute':
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id;
```


##### What can help?
- Adding/Tuning indexes (next slide)
- Tuning the query
    - Remove unneeded columns from the `SELECT`
    - Adding a `LIMIT` to reduce the rows returned
    - Removing `ORDER BY` if they are not needed
- Adding memory and/or CPU to the server
- Tuning the storage to make it faster (e.g. faster SSDs)


For example:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE product_category = 'vegetable'
	AND popularity >= 80;
```

#### -------------------------------
#### ---Under Construction---
#### -------------------------------

</section>

<section class="slide__images">
<caption>1. Execution Plan on Taskbar</caption>
<img src="{{ '../../images/004_Execution_Plan_Location.png' | url }}" />
<caption>2. Execution Plan Results</caption>
<img src="{{ '../../images/004_Execution_Plan_Basic_Output.png' | url }}" />


</section>

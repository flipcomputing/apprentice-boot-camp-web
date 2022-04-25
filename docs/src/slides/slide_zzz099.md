---
layout: 'base.njk'
slide_number: 99
slide_prev: 'slide_022/'
slide_next: 'slide_024/'
section_title: 'How do we query a relational database?'
slide_title: Nested Statements
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### SQL statements can be nested

Sub-queries can appear inside a SELECT, FROM or WHERE clause

They are similar to a function calling another function

###### SELECT... Nesting
```
SELECT <field1>
    , (SELECT COUNT | SUM | AVG(DISTINCT <field2>
        FROM <schema_name>.<table_name>
      ) AS <alias1>;
```

For example, say if we wanted to 
```
SELECT 'Summary' AS Title,
	(
		SELECT SUM(Revenue)
		FROM "sequel-mart-schema"."Sales_Detail"
	) AS total_revenue;
```

###### FROM... Nesting
```
SELECT <field1>, <field2>
FROM
    (SELECT <field1>, <field2>
     FROM <schema_name>.<table_name>
    ) AS <alias1>
```



</section>

<section class="slide__images">
<caption>1. Nested SELECT (Sales Revenue)</caption>
<img src="{{ '../../images/002_Nested_SELECT_Revenue_SUM.png' | url }}" />


</section>

<section class="slide__exercises">

---

#### Exercises:
1. Apart from Amelie M.W.H how many other customers are yet to make a transaction?
    - HINT: Add `WHERE sh.sale_id IS NULL` after your join


</section>
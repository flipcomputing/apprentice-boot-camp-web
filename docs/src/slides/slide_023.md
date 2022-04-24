---
layout: 'base.njk'
slide_number: 23
slide_prev: 'slide_022/'
slide_next: 'slide_024/'
section_title: 'How do we query a relational database?'
slide_title: Nested Statements
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Include a sub-query inside a SELECT, FROM or WHERE clause

###### SELECT Nesting
```
SELECT <field1>, (SELECT COUNT | SUM | AVG(DISTINCT <field2>
                  FROM <schema_name>.<table_name>) AS <alias1>;
```



</section>

<section class="slide__images">
<caption>1. LEFT OUTER JOIN returns matches found in BOTH tables only</caption>
<img src="{{ '../../images/002_LEFT_JOIN_Venn.png' | url }}" />


</section>

<section class="slide__exercises">

---

#### Exercises:
1. Apart from Amelie M.W.H how many other customers are yet to make a transaction?
    - HINT: Add `WHERE sh.sale_id IS NULL` after your join


</section>
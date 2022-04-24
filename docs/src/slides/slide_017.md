---
layout: 'base.njk'
slide_number: 1
slide_prev: 'slide_000/'
slide_next: 'slide_002/'
section_title: How do we create and query a relational database?
slide_title: GROUP BY & HAVING ...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

  #### Aggregate some of the data by one or more categories (`GROUP BY`)
  ##### Optionally filter these aggregations (`HAVING`)

  ```
  SELECT    <field1>, SUM(<field2>) AS SumField2
  FROM      <schema_name>.<table_name> | <view_name>
  WHERE     <field1> = ‘abc’
  GROUP BY  <field1>
  HAVING    SUM(<field2>) > 1
  ORDER BY  <field1> ASC | DESC;
  ```
  
  Other functions include `COUNT`, `AVG`, `MIN`, `MAX` and `STDDEV`

  - A `GROUP BY` will work without a `HAVING`. It will not work the other way around
  - A `HAVING` is to a `GROUP BY` what a `WHERE` is to a `SELECT`
  
</section>

<section class="slide__images">
<caption>1. GROUP BY Example - Products - distinct list of categories and their count</caption>
<img src="{{ '../../images/002_GROUP_BY_001.png' | url }}" />

</section>

<section class="slide__exercises">

---

  #### Exercises:
  - Practice aggregating on a couple of tables on the Sequel-Mart schema
  - Try combinations of aggregators that can include or exclude HAVING and that exclude both GROUP BY and HAVING

</section>
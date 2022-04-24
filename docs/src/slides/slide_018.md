---
layout: 'base.njk'
slide_number: 18
slide_prev: 'slide_017/'
slide_next: 'slide_019/'
section_title: How do we create and query a relational database?
slide_title: HAVING...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Filter aggregated results from a GROUP BY...

```
SELECT    <field1>, SUM | COUNT | AVG(<field2>) AS SumField2
FROM      <schema_name>.<table_name> | <view_name>
GROUP BY  <field1>
HAVING    SUM(<field2>) > <value>;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **aggregate it together and read back only the results that match this criteria**" </span>


For example, if we wanted to `COUNT` how many products we sell by `product_category`:

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
---
layout: 'base.njk'
slide_number: 29
slide_prev: 'slide_028/'
slide_next: 'slide_030/'
section_title: 'How do we change content?'
slide_title: UPDATE...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that you want to change existing record(s) in a table

```
UPDATE TABLE <schema_name>.<table_name>
SET <field_name1> = <replacement_value>
WHERE <field_name1> = <original_value>;
```

###### Product Offers




</section>

<section class="slide__images">
<caption>1. External Product_Offers CSV Location</caption>
<img src="{{ '../../images/003_INSERT_Product_Offer_CSV_Location.png' | url }}" />


</section>
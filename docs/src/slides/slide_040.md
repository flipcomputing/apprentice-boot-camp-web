---
layout: 'base.njk'
slide_number: 40
slide_prev: 'slide_039/'
slide_next: 'slide_041/'
section_title: 'How do we change content?'
slide_title: CREATE INDEX...
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Create a 'copy' of part of the table
```
CREATE INDEX <index_name>
ON <table> USING btree | hash
(field_name1 ASC | DESC, field_name2) NULLS FIRST | LAST
INCLUDE (<field_name3>, <field_name4>);
```




</section>

<section class="slide__images">
<caption>1. Products table arranged in pages</caption>
<img src="{{ '../../images/004_Pages_Example.png' | url }}" />


</section>

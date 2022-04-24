---
layout: 'base.njk'
slide_number: 25
slide_prev: 'slide_024/'
slide_next: 'slide_026/'
section_title: 'How do we change content?'
slide_title: CREATE TABLE...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server to create a new table to store data




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
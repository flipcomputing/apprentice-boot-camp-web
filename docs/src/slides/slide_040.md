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

#### Create a (usually smaller) 'copy' of the table

```
CREATE INDEX <index_name>
ON <table> USING btree | hash
(field_name1 ASC | DESC, field_name2) NULLS FIRST | LAST
INCLUDE (<field_name3>, <field_name4>);
```

##### Advantages of Indexes
- **Regular queries** can use this smaller copy. It can make **reads faster**
- **Cutting out unneeded columns**
    - Fewer pages for the engine to read
    - Uses less memory & CPU
- **Sorts** can be **pre-empted** speeding up the query
- **Indexes can be filtered** making them even faster when used

##### Disadvantages of Indexes
- Extra **overhead**. Data changes happen in multiple places (**slower writes**)
- More **storage** space is needed


#### -------------------------------
#### ---Under Construction---
#### -------------------------------


</section>

<section class="slide__images">



</section>

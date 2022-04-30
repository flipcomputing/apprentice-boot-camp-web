---
layout: 'base.njk'
slide_number: 37
slide_prev: 'slide_036/'
slide_next: 'slide_038/'
section_title: 'How do we change content?'
slide_title: Pages
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### How data is stored in a database
- Split into chunks or ‘pages’ of 8KB in size
- When a page is filled, another is created for new data

##### Like scanning a reference book
- A query instructs the database engine to read `FROM` a 
set of pages (or a table to you and me)
- It scans the `SELECT`ed columns in these pages 
- It marks the rows that fulfil any `WHERE` or `HAVING` clause
for returning as a result
- The engine can `LIMIT` and/or `ORDER` the results read back

##### Problems of scale
- Our database is small
- However, some companies process TBs or PBs of data a day.
- SLOW unless streamlined

<hr />

##### Trivia
- Our `Sales_Detail` table has 59 bytes per row
    - Therefore 139 rows (8,192 / 59) can fit on a page
- The table has ~11,000 rows
    - Therefore we need 79 pages (11,000 / 139) to fit this data
- If we generated 420M Sales_Details that would generate over 3M pages
- Stacked on top of each other, that would be taller than The Shard in London!!
- A lot for a database engine to sift through.  The smaller we make that stack, the faster it makes querying for us

</section>

<section class="slide__images">
<caption>1. Products table arranged in pages</caption>
<img src="{{ '../../images/004_Pages_Example.png' | url }}" />


</section>

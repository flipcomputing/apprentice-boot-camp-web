---
layout: 'base.njk'
slide_number: 34
slide_prev: 'slide_033/'
slide_next: 'slide_035/'
section_title: 'How do we change content?'
slide_title: ALTER COLUMN...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that you want to change a column attribute

We can change a lot of things about a table. The most common are:

###### Data Type
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET DATA TYPE  <data_type1>;
```
<div class="warning">- You will get an error if data in the table is outside of the proposed new data type</div>

###### Default value 
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET DEFAULT <default_value> | DROP DEFAULT;
```

###### Nullability of a column
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET NOT NULL | DROP NOT NULL;
```
<div class="warning">- You will get an error if you `SET NOT NULL` when the column already contains `NULL` rows</div>



###### Example table

To practice, let's create a new table called `aaa_Dummy_Table` on our `sequel-mart-schema` and drop it: 




</section>

<section class="slide__images">
<caption>1. CREATE aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_CREATE.png' | url }}" />
<caption>2. aaa_Dummy_Table included in database schema</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_List.png' | url }}" />
<caption>3. SELECT FROM aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_SELECT.png' | url }}" />
<caption>4. DROP aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_DROP.png' | url }}" />
<caption>5. aaa_Dummy_Table no longer in database schema</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_List_After.png' | url }}" />



</section>

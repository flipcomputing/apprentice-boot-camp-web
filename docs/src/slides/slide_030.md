---
layout: 'base.njk'
slide_number: 30
slide_prev: 'slide_029/'
slide_next: 'slide_031/'
section_title: 'How do we change content?'
slide_title: UPDATE... (Multiple tables)
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### We're ready to apply the discounts to our Sales_Detail table

###### What do we need to do?
- Identify the products the offers apply to
- Identify when the offers applied (the date range)
- Find the transactions where an offer was active for that product
- Apply the discount for those transactions as specified in `Product_Offers`

<div class="warning">Obviously in the real world, this would be applied at the time of sale</div>

###### Where do we find this information?

Five tables each hold pieces to this puzzle so let's go through the requirements slowly.

If we start with the updated Entity Relationship Diagram:
<caption>Updated ERD, including the Product_Offers table</caption>
<img src="{{ '../../images/002_Sequel_Mart_Schema_Inc_Product_Offers.png' | url }}" />


We'll definitely need:
- All product sales from `Sales_Detail`
- The date the sales happened from `Sales_Header`
- 

###### Sales_Detail

Let's see what we have in this table:

```
SELECT sd.*
FROM "sequel-mart-schema"."Sales_Detail" AS sd
LIMIT 50;
```




</section>

<section class="slide__images">
<caption>1. All columns of the Sales_Detail table</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Sales_Details_All.png' | url }}" />



</section>

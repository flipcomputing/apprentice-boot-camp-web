## WHERE... (Single Filters)

1. Q: How many customers joined Sequel-Mart before 1st February 2021?
1. A: 20 customers joined before 1st February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined < '2021-02-01';
```

2. Q: How many products are sold by the unit (e.g. in pack_sizes of 'unit')?
2. A: 4 products were sold by the unit
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size = 'unit';
```

3. Q: How many products are not sold by the kilogram (kg)?
3. A: 33 products were not sold by kg
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg';
```

4. Q: How many times did customer 100 shop in our stores (from Sales_Header)?
4. A: Customer ID 100 shopped in our stores 6 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id = 100;
```

5. Q: How many sales transactions (Sales_Header) had a feedback score of 2?
5. A: 36 transactions had a feedback score of 2
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score = 2;
```



## WHERE... (Multiple  Filters)
1. Q: How many customers joined Sequel-Mart between 1st February 2021 and 28th February 2021?
1. A: 26 customers joined between 1st February 2021 and 28th February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined BETWEEN '2021-02-01' AND '2021-02-28';
```

2. Q: How many products are sold in pack_sizes of unit, bunch or head?
2. A: 17 products were sold by the unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size IN ('unit', 'bunch', 'head');
```

3. Q: How many products are not sold by the kilogram (kg), unit, bunch or head?
3. A: 16 products were not sold by the kg, unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size NOT IN ('kg', 'unit', 'bunch', 'head');
```

4. Q: How many times did customers between 100 and 105 shop in our stores (from Sales_Header)?
4. A: Customer IDs 100-105 shopped in our stores 28 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id BETWEEN 100 AND 105;
```

5. Q: How many customers names end with the initials L.K?
5. A: 3 Customer IDs names end with L.K
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE customer_name like '%L.K';
```

## ORDER BY...
1. Q: When did the first customer and last customer join us?
1. A: The first customer joined on 5th Jan 2021 and the last customer joined on 19th August 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
ORDER BY date_joined
```
```
SELECT *
FROM "sequel-mart-schema"."Customers"
ORDER BY date_joined DESC
```

2. Q: What is the most expensive wholesale_price for products that are not sold by the kg?
2. A: The most expensive wholesale_price for products that are not sold by the kg is £2.00 for Poinsettias
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg'
ORDER BY wholesale_price DESC
```

3. Q: What is the most expensive unit_sales_price for products that have a popularity below 65?
3. A: The most expensive unit_sales_price for products that have a popularity below 65 is £15.63 for red currants
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE popularity < 65
ORDER BY unit_sales_price DESC
```

4. Q: What is the lowest revenue for a sale (Sales_Detail) where there were more than 6 items_sold AND the cost_of_sales was more than 10?
4. A: £14.04 was the lowest revenue for a sale (Sales_Detail) where there were more than 6 items_sold AND the cost_of_sales was more than 10
```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail"
WHERE items_sold > 6 AND cost_of_sales > 10
ORDER BY revenue
```

---

# GROUP BY...
1. Q: How many customer transactions in the Sales_Header table had a feedback_score of 4 and 5?
1. A: 128 transactions had a feedback_score of 4 and 583 had a score of 5
```
SELECT feedback_score, COUNT(customer_id) AS count_customer_id
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score >= 4
GROUP BY feedback_score;
```

2. Q: In the Sales_Detail table, which product_id generated the highest revenue?
    - Limit the result result to show only the top result.
    - What was the average revenue for the product in question 2?
2. A: product_id 55 was the highest with £21,173.60
    - The average revenue for this product was £60.84
```
SELECT product_id, SUM(revenue) AS sum_revenue, AVG(revenue) AS avg_revenue
FROM "sequel-mart-schema"."Sales_Detail"
GROUP BY product_id
ORDER BY sum_revenue DESC
LIMIT 5
```




# HAVING...
1. Q: How many product pack_sizes have an average popularity of 71 or more?
1. A: 4 (bunch 73, twin 73, spray 71, bloom 71)
```
SELECT pack_size, AVG(popularity) AS avg_popularity
FROM "sequel-mart-schema"."Products"
GROUP BY pack_size
having AVG(popularity) >= 71
```

2. Q: In the Sales_Header table, which individual feedback_scores (1, 2, 3, 4 and/or 5) were used in more than 100 transactions (e.g. if 101 transactions had a feedback of 3 then 3 would count)?
2. A: 1, 4 and 5 with 166, 128 and 583 transactions respectively
```
SELECT feedback_score, COUNT(customer_id) AS count_customer_id
FROM "sequel-mart-schema"."Sales_Header"
GROUP BY feedback_score
HAVING COUNT(customer_id) > 100;
```




# INNER JOIN...
1. Q: Join Sales_Header (alias sh) to Stores (alias st).  Bring back the first 20 rows.
1. A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Stores" AS st
    ON st.store_id = sh.store_id
LIMIT 20;
```

2. Q: Join Sales_Header (alias sh) to Dates (alias dt).  Bring back the first 20 rows.
2. A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Dates" AS dt
    ON dt.date_id = sh.date_id
LIMIT 20;
```

3. Q: Join Sales_Header (alias sh) to Sales_Detail (alias sd).  Bring back the first 20 rows.
3. A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd
    ON sd.sale_id = sh.sale_id
LIMIT 20;
```

4. Q: Join Sales_Detail (alias sd) to Products (alias pr).  Bring back the first 20 rows.
4. A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail" AS sd 
INNER JOIN "sequel-mart-schema"."Products" AS pr
    ON sd.product_id = pr.product_id
LIMIT 20;
```



# LEFT OUTER JOIN...
1. Q: Apart from Amelie M.W.H how many other customers are yet to make a transaction?
1. A: 3 (Arlo W.U.Z, Hugo C.A.R and Jude U.D.Y)
```
SELECT *
FROM "sequel-mart-schema"."Customers" AS cu
LEFT OUTER JOIN "sequel-mart-schema"."Sales_Header" AS sh 
    ON cu.customer_id = sh.customer_id
WHERE sh.sale_id IS NULL;
```
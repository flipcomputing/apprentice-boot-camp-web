## WHERE... (Single Filters)
1. 20 customers joined before 1st February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined < '2021-02-01';
```

2. 4 products were sold by the unit
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size = 'unit';
```

3. 33 products were not sold by kg
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg';
```

4. Customer ID 100 shopped in our stores 6 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id = 100;
```

5. 36 transactions had a feedback score of 2
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score = 2;
```



## WHERE... (Multiple  Filters)
1. 26 customers joined between 1st February 2021 and 28th February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined BETWEEN '2021-02-01' AND '2021-02-28';
```

2. 17 products were sold by the unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size IN ('unit', 'bunch', 'head');
```

3. 16 products were not sold by the kg, unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size NOT IN ('kg', 'unit', 'bunch', 'head');
```

4. Customer IDs 100-105 shopped in our stores 28 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id BETWEEN 100 AND 105;
```

5. 3 Customer IDs names end with L.K
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE customer_name like '%L.K';
```

## ORDER BY...
1. The first customer joined on 5th Jan 2021 and the last customer joined on 19th August 2021
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

2. The most expensive wholesale_price for products that are not sold by the kg is £2.00 for Poinsettias
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg'
ORDER BY wholesale_price DESC
```

3. The most expensive unit_sales_price for products that have a popularity below 65 is £15.63 for red currants
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE popularity < 65
ORDER BY unit_sales_price DESC
```

4. £14.04 was the lowest revenue for a sale (Sales_Detail) where there were more than 6 items_sold AND the cost_of_sales was more than 10

```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail"
WHERE items_sold > 6 AND cost_of_sales > 10
ORDER BY revenue
```



# GROUP BY...
1. Q: How many customer transactions in the Sales_Header table had a feedback_score of 4 and 5? A: 4 = 128, 5 = 583
```
SELECT feedback_score, COUNT(customer_id) AS count_customer_id
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score >= 4
GROUP BY feedback_score;
```

2. 

```
SELECT product_id, SUM(revenue) AS sum_revenue, AVG(revenue) AS avg_revenue
FROM "sequel-mart-schema"."Sales_Detail"
GROUP BY product_id
ORDER BY sum_revenue DESC
LIMIT 5
```
# Exercises (Section 4 - Streamlining):

## Execution Plan
1. Write a SELECT query in the Sequel-Mart schema
2. Select the options from the Execution Plan dropdown
3. Execute the query, go to the ‘Explain’ tab, and observe the details
4. Try to work out the most expensive part of the query (and how it executes)

```
--Example Query to evaluate
SELECT *
FROM "sequel-mart-schema"."Sales_Header" as sh
INNER JOIN "sequel-mart-schema"."Sales_Details" as sd ON sh.sale_id = sd.sale_id
LIMIT 1000;
```

---
## CREATE INDEX ...
1. Create the index on the top of this slide by changing the <> on the example query.  The index is on the products table, it's called 'popularity_item', it is on the 'popularity' column, and it includes 'product_item' and 'product_variety'

```
--Example
CREATE INDEX <table>.<index_name>
	ON <schema>.<table> USING btree
	(<column>) ASC NULLS LAST)
	INCLUDE (<column>, <column>)
	;
```
2. Try to create another index on a different table using some of the commands above

---
## CREATE VIEW ...
1. Create a basic view based on either your own tables or the Sequel-Mart schema.  Join at least two tables together in this view.  It should take the form of the example below with <> replaced with your own values.
2. Query some of the columns in this view
3. Practice dropping and recreating the view
```
--Example
CREATE VIEW <schema>.<view_name>
AS
SELECT *
FROM <table> AS <alias>
INNER JOIN <table> AS <alias> ON <alias>.<column> = <alias>.<column>;
```

*Warning: If there is no WHERE clause, every row will be deleted!!*

---
## CREATE PROCEDURE ...
1. Go to the "table-load-base" schema and open “p_customers_generate”.  See if you can interpret the SQL statements
2. Open a new query window and run ‘CALL "table-load-base".”p_customers_generate”(100)
3. Run SELECT * FROM "sequel-mart-schema"."Customers" ORDER BY date_joined DESC;
4. Check that you have some new customers

```
--Example (Generates 100 random sales records for our customer base)
CALL "sequel-mart-schema".”p_sales_generate”(100);
```

---
## TRANSACTIONS ...
1. Open two query windows.  Start a transaction on one and run an UPDATE query
2. Run another query on the same table and record in another query window.  Note it waits for the first query to finish before executing

```
--Example (Updates customers 1 & 3, doesn't update 2 as it is rolled back)
BEGIN;
	UPDATE "sequel-mart-schema"."Customers"
	SET date_joined = CURRENT_TIMESTAMP
	WHERE customer_id = 1;
SAVEPOINT test_transaction;
	UPDATE "sequel-mart-schema"."Customers"
	SET date_joined = CURRENT_TIMESTAMP
	WHERE customer_id = 2;
ROLLBACK TO test_transaction;
	UPDATE "sequel-mart-schema"."Customers"
	SET date_joined = CURRENT_TIMESTAMP
	WHERE customer_id = 3;
COMMIT;
```

---
## SYSTEM TABLES ...
1. [Query some of these tables](https://www.postgresql.org/docs/9.1/catalogs.html)
2. See if you can interpret what the columns mean
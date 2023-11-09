MongoDB: NoSQL database
NoSQL: MongoDB [document based], Cassandara, Redis, ...
MongoDB stores the data in "BSON" format.

{
    "name": "A",
    "price": 3434,
    "category: {
            "id",
            "name" : "tv"
    },
    "supplier" : {
        "name" : "ABC Comp",
        "address": "..."
    }
}

Postgres / MySQL / Oracle ---> RDBMS [linked tables using FK]
supplier
sid | name

category
cid | type

product
pid | name | price | category_fk | supplier_fk

in database we need to perform joins

------------
Schema-less:
Document databases are considered to be non-relational (or NoSQL) databases. Instead of storing data in fixed rows and columns, document databases use flexible documents. Document databases are the most popular alternative to tabular, relational databases.

Steps:
1) Run mongodb on docker
docker run --name some-mongo -p 27017:27017 -d mongo:latest 

2) copy sales.json present in local machine onto docker container

docker cp sales.json some-mongo:/tmp/sales.json


3) get interactive bash terminal for docker container
docker exec -it some-mongo bash
#

4) execute mongodb commands

# mongoimport --db sales_db --collection sales --drop --file tmp/sales.json

5) access mongodb shell, default it connects to "test" database

# mongosh
test>

change database
6) test>  use sales_db
sales_db> show collections

------
1) select * from sales
a) 
sales_db> db.sales.find()

this will list first 20 documents, use "it" to get next 
sales_db> it


b)
sales_db> db.sales.find().pretty()

sales_db> db.sales.find().pretty().limit(2)

2) Using Where clause
select * from sales where category = 'Dairy products'

db.sales.find({"category": "Dairy products"})

select * from sales where category = 'Dairy products' and quarter = 1

db.sales.find({"category": "Dairy products", "quarter": 1})

select * from sales where category = 'Dairy products' or quarter = 1
db.sales.find({"$or": [{"category": "Dairy products"}, {"quarter": 1}]})


3) getting scalar values [ limiting the fields]
select category from sales;

db.sales.find({}, {"category": 1})

// get all except sales
db.sales.find({}, {"sales": 0})


4) insert record

db.sales.insertOne({"quarter": 4, "category":"mobile", sales: 89000.00})

db.sales.find({"category":"mobile"})



db.sales.insertMany([{}, {}, {}]);

5) update

db.sales.updateMany({"quarter":1}, {"sales": 34343});

6) Regular Expression
db.sales.find({"category" : /air/}) 

db.sales.find({"product" : /^sir/i}) 

db.sales.find({"category" : /s$/}) 

----

```
sales_db> db.sales.find({"category": "Dairy products"}).explain("executionStats")
    totalDocsExamined: 287,
    executionStages: {
      stage: 'COLLSCAN',
      filter: { category: { '$eq': 'Dairy products' } },
      nReturned: 38,
      docsExamined: 287

```
db.sales.createIndex({"category": 1})
db.sales.find({"category": "Dairy products"}).explain("executionStats")

nReturned: 38,
totalDocsExamined: 38,
docsExamined: 38,

```


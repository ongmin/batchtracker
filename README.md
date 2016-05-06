## Paula's Choice SG - Batch Expiry Checker

Purpose: For consumers to check expiry date based on batch numbers

####Implementation
- Single Page App
- Express
- DB: MongoLab
- Deploy: Heroku - https://batchtracker.herokuapp.com

####DB Details
- Collection 1: ProductDetails - General information on product (Linking SKU# to Product Name)
- Collection 2: BatchExpiry - Linking Batch Number to Possible SKUs (Note: Batch# are not unique)
- Unique key: SKU# + Batch#


####Maintainers
- Cheryl
- Min

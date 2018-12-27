var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //Insert 3 documents, with specified id values:
    var myobj = [
        { _id: 1, product_id: 154, status:1},
    ];
    dbo.collection("orders").insertMany(myobj, function(err, res) {
        if (err) throw err;
        //Return the result object:
        console.log(res);
        db.close();
    });
});
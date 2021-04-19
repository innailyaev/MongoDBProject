//CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'findMyRestaurant';
const ObjectId = require('mongodb').ObjectID;


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true },(error,client)=>{
    if(error){
        return console.log('Unable to connect to DataBase');
    }
    console.log('Connected correctly');
    const db = client.db(dataBaseName);

    // db.collection('restaurants').insertMany([{name: "bombay", address: {city: "Holon",street: "Herzel 15",coordinates: [-77.46574, 40.6774],},cuisine: "indian",kosher: true,reviews: [{date: new Date("2016-01-01"),score: 7,},{date: new Date("2019-01-01"),score: 3,},{
    //     date: new Date("2018-01-01"),score: 8,},],},{name: "falafel 5 shekels",address: {city: "Bat-Yam",street: "Histradrut 85",coordinates: [-70.46574, 10.6774],},cuisine: "street food",kosher: false,reviews: [{
    //     date: new Date("2019-01-01"),score: 3,},{date: new Date("2016-01-01"),score: 8,},{date: new Date("2020-01-01"),score: 4,},],},{name: "asian delight",address: {city: "Tel Aviv",street: "Balfur 15",coordinates:[-10.46574, 30.6774],},cuisine: "asian",kosher: true,reviews: [{date: new Date("2020-01-01"),score: 3,},{date: new Date("2018-01-01"),score: 8,},{date: new Date("2016-01-01"),score: 9,},],},{name: "coconut jam",address: {city: "Tel Aviv",street: "Stam Adress 15",coordinates: [20.46574, -40.6774],},cuisine: "african",kosher: true,reviews: [{date: new Date("2017-01-01"),score: 10,},{date: new Date("2016-01-01"),score: 8,},{date: new Date("2019-01-01"),score: 6,},],},{
    //     name: "rice and noodles",address: {city: "Holon",street: "Bla Bla 15",coordinates: [20.46574, 10.6774],},cuisine: "asian",kosher: false,reviews: [{date: new Date("2016-01-01"),score: 1,},{date: new Date("2019-01-01"),score: 6,},{date: new Date("2019-01-01"),score: 2,},],},{name: "thailand paradise",address: {city: "Holon",street: "Bla 13",coordinates: [-77.46574, 40.6774],},cuisine: "asian",kosher: false,reviews: [{date: new Date("2020-01-01"),score: 7,},{date: new Date("2019-01-01"),score: 6,},{date: new Date("2020-01-01"),score: 2,},],
    //     },],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     // console.log(result.ops);
    // });

    //1.1 find
    db.collection("restaurants").find().toArray((err,res)=>{
        console.log(res);
    });

    //1.2
    // db.collection("restaurants").find({cuisine:'indian'}).toArray((err,res)=>{
    //     console.log("cuisine",res);
    // });

    //1.3
    // db.collection("restaurants").find({kosher:true}).toArray((err,res)=>{
    //     console.log("kosher",res);
    // });

    //1.4
    // db.collection("restaurants").find({ "address.city": "Tel Aviv"}).toArray((err,res)=>{
    //     console.log("city",res);
    // });

    //1.5
    // db.collection("restaurants").find({ "address.street": "Balfur 15"}).toArray((err,res)=>{
    //     console.log("address",res);
    // });

    //1.6
    // db.collection("restaurants").find({ "address.coordinates":[ 20.46574,10.6774]}).toArray((err,res)=>{
    //     console.log("coordinates",res);
    // });

    //1.7
    // db.collection("restaurants").find({}).sort({"name": 1}).toArray((err,res)=>{
    //     console.log("sort-by name",res);
    // });

    //1.8
    // db.collection("restaurants").find({}).sort({"address.city": 1}).toArray((err,res)=>{
    //     console.log("sort-by city",res);
    // });

    //1.9 update
    // db.collection("restaurants").updateOne({name:'rice and noodles'},{$set: { name: "only noodles" }},function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });

    // db.collection("restaurants").updateOne({ name: "bombay"},{
    //     $push:{"reviews": {
    //        "date": new Date("2019-04-19"),
    //         "score": 8,
    //     }}}
    //     ,function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });
 
    //1.11
    // db.collection("restaurants").updateMany({kosher: false}, {$set: {kosher: true}},function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });
 
    //1.12 delete
    // db.collection("restaurants").deleteOne({_id:ObjectId("607d95ddd952d9333443eb9d")}, function(err, obj) {
    //     if (err) throw err;
    //     console.log("1 document deleted");
    // });

    //1.13
    // db.collection("restaurants").deleteMany();

    //1.14 Increment
    // db.collection("restaurants").updateOne({ name: "bombay"},{
    //         $inc:{"reviews.1.score": 2 }} ,function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document updated");
    // });

    //1.15 Increment
    // db.collection("restaurants").updateOne({ name: "falafel 5 shekels"},{
    //     $inc:{"reviews.1.score": -1 }} ,function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });

    //2. forEach Queries
    // db.collection("restaurants").find().forEach((r)=>{
    //     console.log(r.address.city);
    // })


    //3.1 Advanced Queries
    // db.collection("restaurants").find({ name: {$in: [/^b/]} }).toArray((err,res)=>{
    //     console.log("start with a specific alphabet",res);
    // });

    //3.2 
    // db.collection("restaurants").countDocuments({}, ((err, res)=>{
    //     console.log("count",res);
    // }));

    //3.3 
    db.collection('restaurants').find({reviews: {$elemMatch : {date: new Date("2020-01-01 00:00:00.000Z") }}}).toArray((err,res)=>{
        console.log("date",res);
    })

})

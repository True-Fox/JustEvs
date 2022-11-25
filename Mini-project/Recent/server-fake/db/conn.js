const  {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var user_details;

module.exports = {
    connectToServer: function (callback){
    client.connect(url, function(err, db) {
    if (err) throw err;
    user_details = db.db("User_Details");
    console.log("Database created!");
});
},

getDb: function () {
    return user_details;
}
};
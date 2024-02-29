const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/food";
let dbConnection;
const connectToDb = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => dbConnection;

module.exports = {
  connectToDb,

  getDb,
};

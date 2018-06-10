//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find().toArray().then((doc) =>{
    console.log('Todos')
    console.log (JSON.stringify(doc,undefined,2))
  },(err) =>{
    console.log('unable to fetch todos',err)

})

db.collection('Users').find({name : 'Andrew'}).count().then((user) =>{
  console.log(`count : ${user}`)
  console.log(JSON.stringify(user,undefined,2))
},(err) =>{
  console.log('it is error')
})

  //db.close();
});

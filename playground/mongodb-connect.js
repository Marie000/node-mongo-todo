//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){return console.log('unable to connect to MongoDB server')}
  console.log('connected to MongoDB server');

/*
db.collection('Todos').insertOne({
  text: 'something to do',
  completed: false
},(err,result)=>{
  if(err){
    return console.log('unable to insert todo',err)
  }
  console.log(JSON.stringify(result.ops, undefined, 2))
} )
*/

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectId('57fe9651ee869736c75f8ab5')
}, {
  $set:{completed: true}
},
  {
    returnOriginal: false
  }
).then(function(result){
  console.log(result)
})

//db.close();
})
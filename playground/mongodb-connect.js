const MongoClient = require('mongodb').MongoClient;

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

db.collection('Todos').find({'completed':false}).toArray()
  .then(function(docs){
    console.log(JSON.stringify(docs,undefined,2))
  }, function(err){
    console.log('unable to fetch todos',err)
  });

db.collection('Todos').find().count()
  .then(function(count){
    console.log('there are '+count+ ' items in your todos collection')
  })

//db.close();
})
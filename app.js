const { MongoClient, Collection } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true } );



async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  let collection = db.collection('fruits');
  

  // Here we are inserting the data to MongoDB 
  const insertResult = await collection.insertMany(
    [
      {
        name : "Apple",
        score : 8,
        review: "An apple a day keep the doctor away"
      },
      {
        name : "Orange",
        score : 6,
        review: "Nagpur ke santre"
      },
      {
        name : "Banana",
        score : 9,
        review: "Good for constipations"
      }
    ]
  );
  console.log('Inserted documents =>', insertResult);

  // Here we are finding the data from MongoDB 
  let response = await collection.find({}).toArray();
  console.log(response);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

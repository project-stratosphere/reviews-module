const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const Riak = require('basho-riak-client');
const async = require('async');

const client = new Riak.Client(['127.0.0.1:8087'], (err, c) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to Riak at: ', c); // assume 'c' is for connection
  }
});

// clear out the bucket
const options = {
  bucket: 'reviews',
};
client.deleteValue(options, (err, rslt) => {
  if (err) {
    throw new Error(err);
  }
});

const filePath = path.resolve(__dirname, '../database/seed/users.csv'); //test file 1K users
console.log(filePath);
const readReviews = fs.createReadStream(filePath);
let storeFuncs = [];
const batch = 100000;
const batches = 500;

// populate 10K different review comments
const reviews = { dates: [], comments: [] };

for (let i = 0; i < 10000; i += 1) {
  reviews.dates.push(JSON.stringify(faker.date.between('2015-01-01', '2018-06-02')).slice(1, 11));
  reviews.comments.push(faker.fake('{{lorem.sentences}}'));
}
// populate 100K different users
const users = {
  id: [],
  first_name: [],
  last_name: [],
  user_name: [],
};
for (let i = 1; i < 100001; i += 1) {
  users.id.push(i);
  users.first_name.push(faker.fake('{{name.firstName}}'));
  users.last_name.push(faker.fake('{{name.lastName}}'));
  users.user_name.push(faker.fake('{{internet.userName}}'));
};
for (let i = 0; i < batches; i += 1) {
  // generate the data object
  // batch = 100,000;
  // batches = 10; // for testing

  let data = '';
  let idx = Math.floor(Math.random() * 10000); // same number of rows in the reviews object
  let idx2 = Math.floor(Math.random() * 100000);
  let listID = Math.ceil(Math.random() * 10000000); // same number of listing ids 1 indexed
  let userID = users.id[idx2];
  let firstName = users.first_name[idx2];
  let date = reviews.dates[idx];
  let text = reviews.comments[idx];
  let accuracy = Math.ceil(Math.random() * 5);
  let communication = Math.ceil(Math.random() * 5);
  let cleanliness = Math.ceil(Math.random() * 5);
  let location = Math.ceil(Math.random() * 5);
  let checkin = Math.ceil(Math.random() * 5);
  let value = Math.ceil(Math.random() * 5);

  data = data + listID + '|' + userID + '|' + firstName + '|' + date + '|' + text + '|' + accuracy + '|' + communication + '|' + cleanliness + '|' + location + '|' + checkin + '|' + value + '\n';

  reviews.forEach((review) => {
    storeFuncs.push((callback) => {
      client.storeValue({
        bucket: 'reviews',
        value: data,
      }, (err, result) => {
        callback(err, result);
      });
    });
  });
  async.parallel(storeFuncs, (err, results) => {
    if (err) {
      throw err;
    }
    console.log('async results', results);
    storeFuncs = [];
  });
}

// const storeFuncs = [];
// reviews.forEach((review) => {
//   storeFuncs.push((callback) => {
//     client.storeValue({
//       bucket: 'reviews',
//       key: review.listing_id,
//       value: review,
//     }, (err, result) => {
//       callback(err, result);
//     });
//   });
// });


// async.parallel(storeFuncs, (err, results) => {
//   if (err) {
//     throw err;
//   }
//   console.log('async results', results);
// });

const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const Riak = require('basho-riak-client');
const async = require('async');
// var readline = require('readline');
// var stream = require('stream');

// var instream = fs.createReadStream('your/file');
// var outstream = new stream;
// var rl = readline.createInterface(instream, outstream);

// rl.on('line', function(line) {
//   // process line here
// });

// rl.on('close', function() {
//   // do something on finish here
// });


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
const reviews = [];
const storeFuncs = [];

// const callStoreFuncs = (storeFuncs) => {
//   async.parallel(storeFuncs, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     console.log('async results', results);
//     client.stop(((err, state) => {
//       process.exit();
//     }));
//   });
// };

csv
  .fromStream(readReviews, { objectMode: true, headers: true, delimiter: '|', ignoreEmpty: true, strictColumnHandling: true, discardUnmappedColumns: true })
  .on('data', (data) => {
    reviews.push(data);
    client.storeValue({ bucket: 'reviews', key: data.user_name, value: data }, (err, results) => {
      if (err) {
        throw err;
      }
    });
  })
  .on('end', () => {
    console.log('done');
  });


// write the records to riak
const storeFuncs = [];
reviews.forEach((review) => {
  storeFuncs.push((callback) => {
    client.storeValue({
      bucket: 'reviews',
      key: review.listing_id,
      value: review,
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
});
// readReviews
//   .on('data', (chunk) => {
//     // do something with chunk
//     console.log('here are the chunks', chunk)
//   })
//   .on('end', () => {
//     // notify it ended.
//   })



// const reviews = [
//   {}, {}
// ]



// const test = [
//   {
//     listing_id: '89362',
//     first_name: "Kenyon",
//     review_date: "2016-06-08",
//     review_text: "Architecto maiores et at. Ipsum in quis blanditiis quos non eos est ipsam quaerat. Nam perferendis ut laborum aut velit enim ullam dolorum. Voluptatem at facilis nisi molestiae maxime ex.",
//     rank_accuracy: 1,	 
//     rank_communication: 2,
//     rank_cleanliness: 1,
//     rank_location: 1,
//     rank_checkin: 1,
//     rank_value: 2,
//   },
//   {
//     listing_id: '89362',
//     first_name: "Jane",
//     review_date: "2016-06-10",
//     review_text: "Something different maiores et at. Ipsum in quis blanditiis quos non eos est ipsam quaerat. Nam perferendis ut laborum aut velit enim ullam dolorum. Voluptatem at facilis nisi molestiae maxime ex.",
//     rank_accuracy: 1,	 
//     rank_communication: 2,
//     rank_cleanliness: 1,
//     rank_location: 1,
//     rank_checkin: 1,
//     rank_value: 2,
//   },
// ];

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

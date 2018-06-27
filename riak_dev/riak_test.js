const Riak = require('basho-riak-client');
const async = require('async');

const client = new Riak.Client(['127.0.0.1:8087'], (err, c) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to Riak at: ', c); // assume 'c' is for connection
  }
});

console.time('riakTimer');
client.fetchValue({ bucket: 'reviews', key: 'IGIJLnLEePyBPGiJOiIAWhyfWas', convertToJs: true }, (err, results) => {
  if (err) {
    throw err;
  } else {
    // let riakObj = results.values.shift(); // only grab the first one I guess...need to check if the value is undefined
    // let record = riakObj.value;
    console.log(results)
    console.timeEnd('riakTimer');
    client.stop(((err, state) => {
      process.exit();
    }));
  }
});


// client.stop(((err, state) => {
//   process.exit();
// }));

// client.deleteValue({ bucket: 'reviews', key: '89362' }, (err, results) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('results of delete', results);
//   }
// });

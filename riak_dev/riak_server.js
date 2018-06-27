const Riak = require('basho-riak-client');
const async = require('async');

const client = new Riak.Client(['127.0.0.1:8087'], (err, c) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to Riak at: ', c); // assume 'c' is for connection
  }
});

client.ping((err, results) => {
  if (err) {
    throw err;
  } else {
    console.log('pong', results);
  }
});

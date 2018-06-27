const config = require('./config.js');
const Promise = require('bluebird');
const db = require('./index.js');
const Riak = require('basho-riak-client');

console.log(config);

// Note: this is for a connection to a devrel running on
// host 'riak-test'. You may wish to use the following instead if
// you are running a one-node cluster installed from official
// installation packages:
//
// var riakNodes = [ 'localhost:8087' ];
// var riakNodes = [ 'riak-test:10017', 'riak-test:10027', 'riak-test:10037', 'riak-test:10047' ];

// function Config() { }

// var createClient = function (cb) {
//     return new Riak.Client(riakNodes, cb);
// };

const client1 = new Riak.Client(['127.0.0.1:8087'], (err, c) => {
  if (err) {
    throw err;
  } else {
   //console.log('connected to Riak at: ', c); // assume 'c' is for connection
  }
});

client1.ping(function(e, result) {
  if (e) {
    console.log(e);
  } else {
    console.log('pong', result);
  }
});

// var client2 = config.createClient(function(e, c) {
//   if (e) {
//     throw e;
//   } else {
//     console.log('connected to Riak with:', c);
//   }
// })

// var client3 = config.createClient(function(e, c) {
//   if (e) {
//     throw e;
//   } else {
//     console.log('connected to Riak with:', c);
//   }
// })

// var client4 = config.createClient(function(e, c) {
//   if (e) {
//     throw e;
//   } else {
//     console.log('connected to Riak with:', c);
//   }
// })

// var client5 = config.createClient(function(e, c) {
//   if (e) {
//     throw e;
//   } else {
//     console.log('connected to Riak with:', c);
//   }
// })

// let loadData = (client) => {
//   return new Promise( resolve => {
//     console.log('Promise log immediately')
//     resolve(db.generateBulkData(client))
//   })
// }

// (async () => {
//   await loadData(client1);
//   client1.stop(((err, state) => {
//     console.log('shutting down client')
//     process.exit();
//   }));
// })();

let loadData = () => {
  return new Promise( resolve => {
    db.generateBulkData(client1).then((totalStored) => {
      console.log('in bulkdata total stored', totalStored)
      resolve(1)
    })
  });
}

(async () => {
  try {
    let result = await loadData();
    console.log('resolve result', result)
    client1.stop(((err, state) => {
      process.exit();
    }));
  } catch (err) {
    client1.stop(((err, state) => {
      process.exit();
    }));
    console.log('error thrown');
  }
})()


// (async () => {
//   let loadData = new Promise((resolve, reject) => {
//     console.log('client1 ---------->' , client1)
//     db.generateBulkData(client1);
//   })
//   let result = await loadData;
//   client1.stop(function (err) {
//     if (err) {
//         logger.error('error:', err);
//     }
//     process.exit();
//     // done(err, rslt);
//   });
// })().catch(e => {
//   console.log(e.stack);
//   client1.stop(function (err) {
//     if (err) {
//         logger.error('error:', err);
//     }
//     process.exit();
//     // done(err, rslt);
//   });
// })
// generateBulkData(client2);
// generateBulkData(client3);
// generateBulkData(client4);
// generateBulkData(client5);


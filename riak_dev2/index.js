var config = require('./config.js')
var assert = require('assert');
var Riak = require('basho-riak-client');

var async = require('async');
var { createReviews } = require('./createReviews2.js')
var logger = require('winston');



let totalStored = 0;

function generateBulkData(client) {
  return new Promise( resolve  => {
      if(totalStored < 10000) {
        var batch = []
        for ( let i = 1; i <= 100; i+= 1) {
          
          batch.push(createReviews()) //returns an object with review data
          console.log('batches made', batch[i]);
        }
        add_listings(client, batch).then(() => {
          resolve(totalStored);
        })
        totalStored += 100;
      } else {
        resolve(totalStored);
      }
    });
  };
function add_listings(client, batch) {
  return new Promise(resolve => {
    var storeFuncs = [];
    batch.forEach(function(review) {
        storeFuncs.push(function() {
        client.storeValue({
            bucket:'reviews', 
            key: review.id.toString(),
            value: review
          }, 
          function(err, results) {
            if (err) {
              console.log('error:', err)
            }
          }
        );
      })
    })
    storeFuncs.forEach((f)=> {
      f();
    });
    resolve();
    // async.parallel(storeFuncs, 10, (err, results) => {
    //   if (err) {
    //     throw new Error(err);
    //   } else {
    //     resolve();
    //   }
    // });
  })
}


 function read_listings(client, id) {
   client.fetchValue({bucket:'listings', key: `${id}`, convertToJs:true }, 
   function (error, results) {
     if(error) {
       throw new Error(error)
     } else {
       var riakObj = results.values.shift();
       var currentListing = riakObj.value;
     }
   })
 }
 

 function delete_listings(client,id) {
  client.deleteValue({ bucket: 'listings', key:`${id}`}, function (err, rslt) {
      if (err) {
          throw new Error(err);
      } else {
        counter++
          logger.info('deletd bucket!', id);
          console.log('counter', counter)
      }
      client.stop(function (err) {
          if (err) {
              logger.error('error:', err);
          }
          done(err, rslt);
      });
  });
}

module.exports = {
  read_listings,
  generateBulkData,
}

const Riak = require('basho-riak-client');
const async = require('async');

const storeFuncs = [];
const client = new Riak.Client(['127.0.0.1:8087'], (err, c) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to Riak at: ', c); // assume 'c' is for connection
  }
});

const storeIndexCb = (err, results) => {
  if (err) {
    throw err;
  }
  if (!results) {
    console.log('results error');
  }
};

const store = new Riak.Cmmands.YZ.StoreIndex.Builder()
  .withIndexName('famous')
  .withSchemaName("_yz_default")
  .withCallback(storeIndexCb)
  .build();

client.execute(store);


function storeCb(err, rslt, asyncCb) {
  if (err) {
    throw new Error(err);
  }
  asyncCb(null, rslt);
}

const objs = [
  ['liono', { name_s: 'Lion-o', age_i: 30, leader: true }],
  ['cheetara', { name_s: 'Cheetara', age_i: 30, leader: false }],
  ['snarf', { name_s: 'Snarf', age_i: 43, leader: false }],
  ['panthro', { name_s: 'Panthro', age_i: 36, leader: false }],
];

objs.forEach((o) => {
  const storeFunc = (asyncCb) => {
    const key = o[0];
    const value = o[1];
    const riakObj = new Riak.Commands.KV.RiakObject();
    riakObj.setContentType('application/json');
    riakObj.setBucketType('animals');
    riakObj.setBucket('cats');
    riakObj.setKey(key);
    riakObj.setValue(value);
    client.storeValue({ value: riakObj }, (err, rslt) => {
      storeCb(err, rslt, asyncCb);
    });
  };
  storeFuncs.push(storeFunc);
});

async.parallel(storeFuncs, (err, rslts) => {
  if (err) {
    throw new Error(err);
  }
  // NB: all objects stored and indexed...
});

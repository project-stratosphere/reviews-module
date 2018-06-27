const fs = require('fs');
const faker = require('faker');

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
}


function createReviews(){
  let idx = Math.floor(Math.random() * 10000); // same number of rows in the reviews object
  let idx2 = Math.floor(Math.random() * 100000);
  let listId = Math.ceil(Math.random() * 10000000); // same number of listing ids 1 indexed
  let userId = users.id[idx2];
  let firstName = users.first_name[idx2];
  let date = reviews.dates[idx];
  let text = reviews.comments[idx];
  let accuracy = Math.ceil(Math.random() * 5);
  let communication = Math.ceil(Math.random() * 5);
  let cleanliness = Math.ceil(Math.random() * 5);
  let location = Math.ceil(Math.random() * 5);
  let checkin = Math.ceil(Math.random() * 5);
  let value = Math.ceil(Math.random() * 5);
  
  var results =  {
    listId,
    userId,
    firstName,
    date,
    text,
    accuracy,
    communication,
    cleanliness,
    location,
    checkin,
    value,
  };
  console.log('results going into batch', results)
  return results;
}

module.exports =  createReviews;

    
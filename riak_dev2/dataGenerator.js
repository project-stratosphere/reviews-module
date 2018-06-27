const faker = require('faker');
const fs = require('fs');

const highlightsGenerator = () => {
  let arr = [];
  let possibleHighlights = [
    {
      head: 'Great check-in experience',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Great location',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Self check-in',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Sparkling clean',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Breakfast',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Indoor fireplace',
      body: faker.lorem.sentence(),
    },
  ]
  for (var i = 0; i < 3; i++) {
    let index = parseInt(Math.random() * possibleHighlights.length);
    arr.push(possibleHighlights[index]);
    possibleHighlights.splice(index, 1);
  }
  return arr;
};

const moreDescriptionGenerator = () => {
  let possibleDescriptions = [
    {
      head: 'Guest access',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Interaction with guests',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Other things to note',
      body: faker.lorem.sentence(),
    },
  ];
  let arr = [{
    head: 'The space',
    body: faker.lorem.paragraph(),
  }];

  for (var i = 0; i < faker.random.arrayElement([1, 2, 3]); i++) {
    let index = parseInt(Math.random() * possibleDescriptions.length);
    arr.push(possibleDescriptions[index]);
    possibleDescriptions.splice(index, 1);
  }
  return arr;
};

const generateGeneralInfo = (id) => {
  return {
    id: id,
    title: `${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()} Home`,
    location: faker.address.city(),
    home_type: `${faker.commerce.productAdjective()} HOUSE`,
    owner: {
      name: faker.name.firstName(),
      avatar_url: faker.internet.avatar(),
    },
    property_features: {
      guests: faker.random.number(10), bedrooms: faker.random.number(6), beds: faker.random.number(6), baths: faker.random.number(4),
    },
    highlights: highlightsGenerator(),
    short_description: faker.lorem.sentence(),
    more_description: moreDescriptionGenerator(),
  };
};

const generateCategoryItems = (category) => {
  let arr = [];

  for (var i = 0; i < faker.random.arrayElement([2, 3]); i++) {
    let index = parseInt(Math.random() * category.length);
    arr.push(category[index]);
    category.splice(index, 1);
  }

  return arr;
};

module.exports = generateGeneralInfo;
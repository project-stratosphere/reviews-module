const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbQueries = require('./helpers/queries.js');
const dataHandlers = require('./helpers/datahandlers.js');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// Decided not to use a router, considering there are only two routes.
// Here's a helpful reference though for the future (note to self):
// https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
app.get('/api/listings/:id/reviews', (req, res) => {
  const listingID = JSON.parse(req.params.id);
  dbQueries.listingReviews.get(listingID)
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

app.get('/api/listings/:id/averagestars', (req, res) => {
  const listingID = JSON.parse(req.params.id);
  dbQueries.listingAverageStars.get(listingID)
    .then((data) => {
      const reviewStarsObj = dataHandlers.calcReviewsAverageStars(data);
      res.status(200).send(JSON.stringify(reviewStarsObj));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

const port = 3004;

app.listen(3004, () => console.log('App listening on port ', port));


require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const redis = require('redis');
const compression = require('compression');
const db = require('./helpers/queries.js');
const dataHandlers = require('./helpers/datahandlers.js');

const port = process.env.PORT || 3004;

const app = express();
const client = redis.createClient();

// Allowing all cross origin requests for simplicity, given this is a controlled environment.
// Would not do this in a deployment environment.
app.use(cors());
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(compression());

// Decided not to use a router, considering there are only two routes.
// Here's a helpful reference though for the future (note to self):
// https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
const getCache = (req, res) => {
  //console.log('there is a req', req)
  const { params } = req;
  const listingId = req.params.id.replace(/\D/g, '');
  // check cache first
  client.get(listingId, (err, result) => {
    if(result) {
      res.status(200).send(result); //results already stringified
      return;
    }
    db.listingReviews.get(listingId)
    .then(({ rows }) => {
      const formattedReviews = dataHandlers.processReviewsArray(rows);
      // cache the results for 1 hour
      client.setex(listingId, 3600, JSON.stringify(formattedReviews));
      res.status(200).send(JSON.stringify(formattedReviews));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
  });
}

app.get('/api/listings/:id/reviews', getCache)

app.post('/api/listings/:id/reviews/new', (req, res) => {
  const review = req.data; // Listing data (IDs) will have to be part of the data
  db.listingReviews.post(review)
    .then(({ rows }) => {
      const formattedReviews = dataHandlers.processReviewsArray(rows);
      res.status(200).send(JSON.stringify(formattedReviews));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

app.put('/api/listings/:id/reviews/edit', (req, res) => {
  const review = req.data;
  db.listingReviews.put(review)
    .then(({ rows }) => {
      const formattedReviews = dataHandlers.processReviewsArray(rows);
      res.status(200).send(JSON.stringify(formattedReviews));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

app.delete('/api/listings/:id/reviews/remove', (req, res) => {
  const review = req.data;
  db.listingReviews.delete(review)
    .then(({ rows }) => {
      const formattedReviews = dataHandlers.processReviewsArray(rows);
      res.status(200).send(JSON.stringify(formattedReviews));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});


app.get('*', (req, res) => {
  res.status(404).send('Sorry, that page was not found!  Try the following pathname: /rooms/{id}');
});

app.listen(3004, () => console.log('App listening on port ', port));

